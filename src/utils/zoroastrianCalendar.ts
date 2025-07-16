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
  const result = await zoroastrianCalendarCalculator(input);
  console.log('Conversion result:', result);
  
  if ('error' in result) {
    throw new Error(result.error);
  }
  
  // Create backward-compatible output using dargozasht date
  const dargozashtDate = result.adjustedRoozEDargozasht;
  const rozName = result.rozNames.roozEDargozasht;
  
  return {
    gregorianDate: dargozashtDate,
    zoroastrianDate: `Day ${rozName}`,
    rozName: rozName,
    isGatha: false,
    nextMonthlyRooze: {
      gregorian: result.roozESevvom,
      rozName: result.rozNames.roozESevvom
    },
    salrooz: {
      gregorian: result.salrooz,
      zoroastrian: `Day ${result.rozNames.salrooz}`,
      rozName: result.rozNames.salrooz
    },
    // Legacy fields for backward compatibility
    zoroastrianYear: parseInt(dargozashtDate.substring(0, 4)) - 621,
    zoroastrianMonth: "Farvardin",
    zoroastrianDay: rozName,
    dayNumber: 1,
    monthNumber: 1,
    isGathaDay: false,
    gathaDay: undefined,
    isEsfandMonth: false,
    isAvardadDay: false
  };
}

async function zoroastrianCalendarCalculator(input) {
  const { deathDateTimeLocal, city, state } = input;

  // 1. Get latitude & longitude
  const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=USA&format=json`);
  const geoData = await geoRes.json();
  if (!geoData || geoData.length === 0) {
    return { error: "Location not found. Please check the city and state." };
  }
  const lat = geoData[0].lat;
  const lon = geoData[0].lon;

  // 2. Convert to UTC
  const localDate = new Date(deathDateTimeLocal);
  const utcDate = new Date(localDate.toISOString());
  const deathDateISO = utcDate.toISOString().slice(0, 10);

  // 3. Get sunrise time
  const sunriseRes = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${deathDateISO}&formatted=0`);
  const sunriseData = await sunriseRes.json();
  const sunriseUTC = new Date(sunriseData.results.sunrise);

  // 4. Adjust if before sunrise
  let effectiveDate = utcDate;
  if (utcDate < sunriseUTC) {
    effectiveDate = new Date(utcDate.getTime() - 86400000); // subtract 1 day
  }

  // 5. Rōz name logic (March 21 = Hormozd = index 0, confirmed offset = +1)
  const baseDate = new Date(Date.UTC(effectiveDate.getUTCFullYear(), 2, 21));
  if (effectiveDate < baseDate) baseDate.setUTCFullYear(baseDate.getUTCFullYear() - 1);
  const msPerDay = 86400000;
  const daysSinceNewYear = Math.floor((effectiveDate.getTime() - baseDate.getTime()) / msPerDay);

  const rozNames = [
    "Hormozd", "Bahman", "Ardibehesht", "Shahrivar", "Spandarmad",
    "Khordad", "Amordad", "Day-Ādur", "Ādur", "Āban",
    "Khorshed", "Māh", "Tir", "Gushnasp", "Day-Mihr",
    "Mihr", "Srosh", "Rashn", "Farvardin", "Day-Bedin",
    "Bahram", "Ram", "Govad", "Dae-pa-Den", "Den",
    "Ard", "Ashtad", "Asman", "Zam", "Anagran"
  ];

  const getRozName = (date) => {
    const offsetDays = Math.floor((date.getTime() - baseDate.getTime()) / msPerDay);
    return rozNames[(offsetDays + 1) % 30]; // ✅ Final correction here
  };

  // 6. Ritual dates
  const dargozasht = effectiveDate;
  const sevvom = new Date(dargozasht.getTime() + 2 * msPerDay);
  const chaharom = new Date(dargozasht.getTime() + 3 * msPerDay);
  const dahhom = new Date(dargozasht.getTime() + 9 * msPerDay);
  const siroozeh = new Date(dargozasht.getTime() + 12 * msPerDay);
  const salrooz = new Date(Date.UTC(dargozasht.getUTCFullYear() + 1, dargozasht.getUTCMonth(), dargozasht.getUTCDate()));

  return {
    adjustedRoozEDargozasht: dargozasht.toISOString().slice(0, 10),
    roozESevvom: sevvom.toISOString().slice(0, 10),
    roozEChaharom: chaharom.toISOString().slice(0, 10),
    roozEDahhom: dahhom.toISOString().slice(0, 10),
    siroozeh: siroozeh.toISOString().slice(0, 10),
    salrooz: salrooz.toISOString().slice(0, 10),
    rozNames: {
      roozEDargozasht: getRozName(dargozasht),
      roozESevvom: getRozName(sevvom),
      roozEChaharom: getRozName(chaharom),
      roozEDahhom: getRozName(dahhom),
      siroozeh: getRozName(siroozeh),
      salrooz: getRozName(salrooz)
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