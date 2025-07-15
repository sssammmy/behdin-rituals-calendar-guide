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

export function convertToZoroastrianDate(gregorianDate: Date): ZoroastrianDate {
  const gregDateStr = gregorianDate.toISOString().slice(0, 10);
  console.log('Converting date:', gregDateStr);
  const result = gregorianToZoroastrianFasliFull(gregDateStr);
  console.log('Conversion result:', result);
  return result;
}

function gregorianToZoroastrianFasliFull(gregDateStr: string): ZoroastrianDate {
  const input = new Date(gregDateStr);
  const inputUTC = new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate()));

  const msPerDay = 86400000;
  const baseYear = inputUTC.getUTCMonth() > 2 || (inputUTC.getUTCMonth() === 2 && inputUTC.getUTCDate() >= 20)
    ? inputUTC.getUTCFullYear()
    : inputUTC.getUTCFullYear() - 1;

  const baseDate = new Date(Date.UTC(baseYear, 2, 20)); // March 20 UTC
  const daysSinceNewYear = Math.floor((inputUTC.getTime() - baseDate.getTime()) / msPerDay);

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

  let month = "";
  let day = 0;
  let rozName = "";
  let isGatha = false;
  let zoroastrianDate = "";

  if (daysSinceNewYear < 360) {
    const monthIndex = Math.floor(daysSinceNewYear / 30);
    const dayIndex = daysSinceNewYear % 30;
    month = monthNames[monthIndex];
    day = dayIndex + 1;
    rozName = rozNames[dayIndex];
    zoroastrianDate = `${month} ${day}`;
  } else {
    const gathaIndex = daysSinceNewYear - 360;
    rozName = gathaNames[gathaIndex];
    zoroastrianDate = `Esfand ${31 + gathaIndex}`;
    isGatha = true;
  }

  const nextMonthlyRooze = new Date(inputUTC.getTime() + 30 * msPerDay);
  const nextSalrooz = new Date(Date.UTC(baseYear + 1, 2, 20) + daysSinceNewYear * msPerDay);

  // Legacy compatibility fields
  const monthIndex = daysSinceNewYear < 360 ? Math.floor(daysSinceNewYear / 30) : 11;
  const dayIndex = daysSinceNewYear < 360 ? daysSinceNewYear % 30 : (daysSinceNewYear - 360);
  const zoroastrianYear = baseYear - 621;

  return {
    gregorianDate: inputUTC.toISOString().slice(0, 10),
    zoroastrianDate: zoroastrianDate,
    rozName: rozName,
    isGatha: isGatha,
    nextMonthlyRooze: {
      gregorian: nextMonthlyRooze.toISOString().slice(0, 10),
      rozName: rozName
    },
    salrooz: {
      gregorian: nextSalrooz.toISOString().slice(0, 10),
      zoroastrian: zoroastrianDate,
      rozName: rozName
    },
    // Legacy fields for backward compatibility
    zoroastrianYear,
    zoroastrianMonth: monthNames[monthIndex],
    zoroastrianDay: rozName,
    dayNumber: dayIndex + 1,
    monthNumber: monthIndex + 1,
    isGathaDay: isGatha,
    gathaDay: isGatha ? rozName : undefined,
    isEsfandMonth: monthIndex === 11,
    isAvardadDay: false
  };
}

export function formatZoroastrianDate(zDate: ZoroastrianDate): string {
  // Just return the Zoroastrian day name
  return zDate.rozName;
}

export function calculateMonthlyRoze(deathDate: Date, numberOfMonths: number = 12): MonthlyRoze[] {
  const deathZoroastrianDate = convertToZoroastrianDate(deathDate);
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
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1],
        gregorianDate: monthDate,
        zoroastrianDate: convertToZoroastrianDate(monthDate)
      });
    }
  } 
  // If death occurs on Avardād Day (leap year 30th day of Esfand)
  else if (deathZoroastrianDate.isAvardadDay) {
    // Monthly Rōz-e observed on same Farvardin day in following months
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDate: monthDate,
        zoroastrianDate: convertToZoroastrianDate(monthDate)
      });
    }
  }
  // Regular death (including regular days of Esfand)
  else {
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDate: monthDate,
        zoroastrianDate: convertToZoroastrianDate(monthDate)
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