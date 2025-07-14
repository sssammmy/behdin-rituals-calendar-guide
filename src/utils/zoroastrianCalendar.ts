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
  gregorianDate: Date;
  zoroastrianYear: number;
  zoroastrianMonth: string;
  zoroastrianDay: string;
  dayNumber: number;
  monthNumber: number;
  isGathaDay: boolean;
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
  const year = gregorianDate.getFullYear();
  const baseYear = gregorianDate.getMonth() >= 2 && gregorianDate.getDate() >= 20 ? year : year - 1;
  const baseDate = new Date(`${baseYear}-03-20`); // March 20 is day 0
  
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSinceNewYear = Math.floor((gregorianDate.getTime() - baseDate.getTime()) / msPerDay);
  
  const zoroastrianYear = baseYear - 621;
  
  // Check if we're in Gatha period (days 360+)
  if (daysSinceNewYear >= 360) {
    const gathaIndex = daysSinceNewYear - 360;
    
    if (gathaIndex < 5) {
      return {
        gregorianDate,
        zoroastrianYear,
        zoroastrianMonth: "Esfand",
        zoroastrianDay: GATHA_DAYS[gathaIndex],
        dayNumber: 31 + gathaIndex,
        monthNumber: 12,
        isGathaDay: true,
        gathaDay: GATHA_DAYS[gathaIndex],
        isEsfandMonth: true
      };
    }
  }
  
  // Regular months (12 months of 30 days each)
  const monthIndex = Math.floor(daysSinceNewYear / 30);
  const dayIndex = daysSinceNewYear % 30;
  
  const isEsfandMonth = monthIndex === 11;
  const isAvardadDay = false; // This calendar doesn't use Avardad Day concept
  
  return {
    gregorianDate,
    zoroastrianYear,
    zoroastrianMonth: ZOROASTRIAN_MONTHS[monthIndex],
    zoroastrianDay: ZOROASTRIAN_DAYS[dayIndex],
    dayNumber: dayIndex + 1,
    monthNumber: monthIndex + 1,
    isGathaDay: false,
    isEsfandMonth,
    isAvardadDay
  };
}

export function formatZoroastrianDate(zDate: ZoroastrianDate): string {
  // Convert to Shamsi year (Persian Solar Hijri calendar)
  // Shamsi year = Gregorian year - 621 (to show 1404 for current year)
  const gregorianYear = zDate.gregorianDate.getFullYear();
  const shamsiYear = gregorianYear - 621;
  
  if (zDate.isGathaDay) {
    return `${zDate.gathaDay} (Gatha ${zDate.dayNumber}), ${shamsiYear} ش`;
  }
  return `${zDate.zoroastrianDay}, ${zDate.zoroastrianMonth} ${zDate.dayNumber}, ${shamsiYear} ش`;
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