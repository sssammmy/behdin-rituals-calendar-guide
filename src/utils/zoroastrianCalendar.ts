import { format, isLeapYear, getDayOfYear, addDays, addMonths, addYears } from "date-fns";

// Zoroastrian months
const ZOROASTRIAN_MONTHS = [
  "Farvardin", "Ordibehesht", "Khordad", "Tir", "Amordad", "Shahrivar",
  "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"
];

// Zoroastrian days (Roz names)
const ZOROASTRIAN_DAYS = [
  "Hormozd", "Bahman", "Ardibehesht", "Shahrivar", "Spandarmad",
  "Khordad", "Amordad", "Day-Ādur", "Ādur", "Āban",
  "Khorshed", "Māh", "Tir", "Gushnasp", "Day-Mihr",
  "Mihr", "Srosh", "Rashn", "Farvardin", "Day-Bedin",
  "Bahram", "Ram", "Govad", "Dae-pa-Den", "Den",
  "Ard", "Ashtad", "Asman", "Zam", "Anagran"
];

// Gatha days
const GATHA_DAYS = [
  "Ahunavad", "Ushtavad", "Spentomad", "VohuKshathra", "Vehishtoish"
];

export interface ZoroastrianDate {
  gregorianDate: string;
  zoroastrianDate: string;
  rozName: string;
  isGatha: boolean;
  nextMonthlyRooze: {
    gregorian: string;
    rozName: string;
  };
  salrooz: {
    gregorian: string;
    zoroastrian: string;
    rozName: string;
  };
  // Legacy fields for backward compatibility
  zoroastrianYear?: number;
  zoroastrianMonth?: string;
  zoroastrianDay?: string;
  dayNumber?: number;
  monthNumber?: number;
  isGathaDay?: boolean;
  gathaDay?: string;
  isEsfandMonth?: boolean;
  isAvardadDay?: boolean;
}

export interface MonthlyRoze {
  month: string;
  gregorianDate: Date;
  zoroastrianDate: ZoroastrianDate;
  isSkipped?: boolean;
  reason?: string;
}

export async function convertToZoroastrianDate(input: { deathDateTimeLocal: string; city: string; state: string }): Promise<ZoroastrianDate> {
  console.log('Converting date:', input);
  const result = await zoroastrianDeathCalendar(input);
  console.log('Conversion result:', result);
  
  // Convert to ZoroastrianDate format for backward compatibility
  const monthIndex = result.zoroastrianDate.includes('Esfand') ? 11 : 
    ZOROASTRIAN_MONTHS.findIndex(month => result.zoroastrianDate.includes(month));
  const dayMatch = result.zoroastrianDate.match(/\d+/);
  const dayNumber = dayMatch ? parseInt(dayMatch[0]) : 1;
  const zoroastrianYear = parseInt(result.adjustedGregorianDate.substring(0, 4)) - 621;

  return {
    gregorianDate: result.adjustedGregorianDate,
    zoroastrianDate: result.zoroastrianDate,
    rozName: result.rozName,
    isGatha: result.isGatha,
    nextMonthlyRooze: result.nextMonthlyRooze,
    salrooz: result.salrooz,
    // Legacy fields for backward compatibility
    zoroastrianYear,
    zoroastrianMonth: ZOROASTRIAN_MONTHS[monthIndex],
    zoroastrianDay: result.rozName,
    dayNumber,
    monthNumber: monthIndex + 1,
    isGathaDay: result.isGatha,
    gathaDay: result.isGatha ? result.rozName : undefined,
    isEsfandMonth: monthIndex === 11,
    isAvardadDay: false
  };
}

async function zoroastrianDeathCalendar(input: { deathDateTimeLocal: string; city: string; state: string }) {
  const { deathDateTimeLocal, city, state } = input;

  // Step 1: Get lat/lon from city + state
  const locationResp = await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=USA&format=json`);
  const locationData = await locationResp.json();
  if (!locationData || locationData.length === 0) {
    return { error: "City and state could not be geocoded." };
  }
  const lat = locationData[0].lat;
  const lon = locationData[0].lon;

  // Step 2: Convert deathDateTimeLocal to UTC
  const localDate = new Date(deathDateTimeLocal);
  const deathDateUTC = new Date(localDate.toISOString());

  const deathDateISO = deathDateUTC.toISOString().slice(0, 10); // YYYY-MM-DD

  // Step 3: Get sunrise time in UTC for that location
  const sunriseResp = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${deathDateISO}&formatted=0`);
  const sunriseData = await sunriseResp.json();
  const sunriseUTC = new Date(sunriseData.results.sunrise);

  // Step 4: Adjust date if before sunrise
  let effectiveUTC = deathDateUTC;
  if (deathDateUTC < sunriseUTC) {
    effectiveUTC = new Date(deathDateUTC.getTime() - 86400000); // subtract 1 day
  }

  // Step 5: Zoroastrian calendar logic
  const baseYear = effectiveUTC.getUTCMonth() > 2 || (effectiveUTC.getUTCMonth() === 2 && effectiveUTC.getUTCDate() >= 21)
    ? effectiveUTC.getUTCFullYear()
    : effectiveUTC.getUTCFullYear() - 1;

  const baseDate = new Date(Date.UTC(baseYear, 2, 21)); // March 21
  const daysSinceNewYear = Math.floor((effectiveUTC.getTime() - baseDate.getTime()) / 86400000);

  const monthNames = [
    "Farvardin", "Ordibehesht", "Khordad", "Tir", "Amordad", "Shahrivar",
    "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"
  ];

  const rozNames = [
    "Hormozd", "Bahman", "Ardibehesht", "Shahrivar", "Spandarmad",
    "Khordad", "Amordad", "Day-Ādur", "Ādur", "Āban",
    "Khorshed", "Māh", "Tir", "Gushnasp", "Day-Mihr",
    "Mihr", "Srosh", "Rashn", "Farvardin", "Day-Bedin",
    "Bahram", "Ram", "Govad", "Dae-pa-Den", "Den",
    "Ard", "Ashtad", "Asman", "Zam", "Anagran"
  ];

  const gathaNames = ["Ahunavad", "Ushtavad", "Spentomad", "VohuKshathra", "Vehishtoish"];

  let zoroastrianDate = "";
  let rozName = "";
  let isGatha = false;

  if (daysSinceNewYear < 360) {
    const monthIndex = Math.floor(daysSinceNewYear / 30);
    const dayIndex = daysSinceNewYear % 30;
    zoroastrianDate = `${monthNames[monthIndex]} ${dayIndex + 1}`;
    rozName = rozNames[dayIndex];
  } else {
    const gathaIndex = daysSinceNewYear - 360;
    zoroastrianDate = `Esfand ${31 + gathaIndex}`;
    rozName = gathaNames[gathaIndex];
    isGatha = true;
  }

  const msPerDay = 86400000;
  const nextMonthlyRooze = new Date(effectiveUTC.getTime() + 30 * msPerDay);
  const salroozBase = new Date(Date.UTC(baseYear + 1, 2, 21));
  const salroozDate = new Date(salroozBase.getTime() + daysSinceNewYear * msPerDay);

  return {
    adjustedGregorianDate: effectiveUTC.toISOString().slice(0, 10),
    city: city,
    state: state,
    zoroastrianDate,
    rozName,
    isGatha,
    nextMonthlyRooze: {
      gregorian: nextMonthlyRooze.toISOString().slice(0, 10),
      rozName: rozName
    },
    salrooz: {
      gregorian: salroozDate.toISOString().slice(0, 10),
      zoroastrian: zoroastrianDate,
      rozName: rozName
    }
  };
}

export function formatZoroastrianDate(zDate: ZoroastrianDate): string {
  // Just return the Zoroastrian day name
  return zDate.rozName;
}

export async function calculateMonthlyRoze(deathDate: Date, city: string, state: string, numberOfMonths: number = 12): Promise<MonthlyRoze[]> {
  const deathZoroastrianDate = await convertToZoroastrianDate({
    deathDateTimeLocal: deathDate.toISOString(),
    city: city,
    state: state
  });
  const monthlyRoze: MonthlyRoze[] = [];

  // If death occurs during Gatha days
  if (deathZoroastrianDate.isGathaDay) {
    // Skip Farvardin month (no corresponding day)
    monthlyRoze.push({
      month: "Farvardin",
      gregorianDate: new Date(), // placeholder
      zoroastrianDate: deathZoroastrianDate,
      isSkipped: true,
      reason: "No corresponding day in Farvardin for Gatha death"
    });

    // From Ordibehesht onward, observe on the same Farvardin day
    for (let i = 2; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      const correspondingDay = deathZoroastrianDate.dayNumber; // Use same day number
      
      const monthZoroastrianDate = await convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1],
        gregorianDate: monthDate,
        zoroastrianDate: monthZoroastrianDate
      });
    }
  } 
  // If death occurs on Avardād Day (leap year 30th day of Esfand)
  else if (deathZoroastrianDate.isAvardadDay) {
    // Monthly Rōz-e observed on same Farvardin day in following months
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      const monthZoroastrianDate = await convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDate: monthDate,
        zoroastrianDate: monthZoroastrianDate
      });
    }
  }
  // Regular death (including regular days of Esfand)
  else {
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      const monthZoroastrianDate = await convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDate: monthDate,
        zoroastrianDate: monthZoroastrianDate
      });
    }
  }

  return monthlyRoze;
}

export function getSpecialCaseNotes(zoroastrianDate: ZoroastrianDate): string[] {
  const notes: string[] = [];

  if (zoroastrianDate.isGathaDay) {
    notes.push("Death occurred during Gatha days (Panjeh Māneh)");
    notes.push("No Rōz-e will be observed in Farvardin month");
    notes.push("Monthly Rōz-e begins from Ordibehesht onward");
    notes.push("Annual memorial observed on same Gatha day");
  }

  if (zoroastrianDate.isAvardadDay) {
    notes.push("Death occurred on Avardād Day (leap year)");
    notes.push("Annual memorial held on last Gatha day (Vehishtoish Gāh)");
  }

  if (zoroastrianDate.isEsfandMonth && !zoroastrianDate.isGathaDay) {
    notes.push("Death occurred in month of Esfand");
    notes.push("30th-day ritual observed exactly 30 days after death");
  }

  return notes;
}