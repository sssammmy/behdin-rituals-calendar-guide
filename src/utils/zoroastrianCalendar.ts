import { format, isLeapYear, getDayOfYear, addDays, addMonths, addYears } from "date-fns";

// Zoroastrian months and their meanings
const ZOROASTRIAN_MONTHS = [
  "Farvardin", "Ardibehesht", "Khordad", "Tir", "Mordad", "Shahrivar",
  "Mehr", "Aban", "Azar", "Dey", "Bahman", "Spendarmed"
];

// Zoroastrian days (30 days per month)
const ZOROASTRIAN_DAYS = [
  "Ahura Mazda", "Vohu Mano", "Asha Vahishta", "Khshathra Vairya", "Spenta Armaiti", "Haurvatat",
  "Ameretat", "Dae-pa-Adar", "Adar", "Aban", "Khor", "Mah", "Tir", "Gosh", "Dae-pa-Mehr",
  "Mehr", "Srosh", "Rashn", "Farvardin", "Bahram", "Ram", "Bad", "Dae-pa-Din", "Din",
  "Ashishvangh", "Marespand", "Anagran", "Zamyad", "Marespand", "Anagran"
];

// Additional days for Gatha period (5 days, 6 in leap years)
const GATHA_DAYS = [
  "Ahunavaiti", "Ushtavaiti", "Spentamainyu", "Vohukhshathra", "Vahishtoishti"
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
  // Fasli calendar starts on March 21st (Nowruz)
  const year = gregorianDate.getFullYear();
  const nowruz = new Date(year, 2, 21); // March 21st
  
  // Adjust for leap years - if current date is before this year's Nowruz, use previous year
  let zoroastrianYear: number;
  let daysSinceNowruz: number;
  
  if (gregorianDate < nowruz) {
    zoroastrianYear = year + 1378 - 1; // Previous Zoroastrian year
    const prevNowruz = new Date(year - 1, 2, 21);
    daysSinceNowruz = Math.floor((gregorianDate.getTime() - prevNowruz.getTime()) / (1000 * 60 * 60 * 24));
  } else {
    zoroastrianYear = year + 1378; // Current Zoroastrian year
    daysSinceNowruz = Math.floor((gregorianDate.getTime() - nowruz.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Handle leap year calculations
  const isGregorianLeap = isLeapYear(gregorianDate);
  const totalDaysInZorYear = 365 + (isGregorianLeap ? 1 : 0);
  
  // Check if we're in Gatha period (last 5-6 days of the year)
  if (daysSinceNowruz >= 360) {
    const gathaIndex = daysSinceNowruz - 360;
    const isGathaDay = gathaIndex < 5 || (isGregorianLeap && gathaIndex === 5);
    
    if (isGathaDay) {
      return {
        gregorianDate,
        zoroastrianYear,
        zoroastrianMonth: "Gatha Days",
        zoroastrianDay: gathaIndex < 5 ? GATHA_DAYS[gathaIndex] : "Vahishtoishti (Leap)",
        dayNumber: gathaIndex + 1,
        monthNumber: 13,
        isGathaDay: true,
        gathaDay: gathaIndex < 5 ? GATHA_DAYS[gathaIndex] : "Vahishtoishti (Leap)"
      };
    }
  }

  // Regular months (12 months of 30 days each)
  const monthNumber = Math.floor(daysSinceNowruz / 30) + 1;
  const dayInMonth = (daysSinceNowruz % 30) + 1;
  
  // Ensure we don't go beyond 12 months
  const adjustedMonth = Math.min(monthNumber, 12);
  const adjustedDay = monthNumber > 12 ? 30 : dayInMonth;

  const isEsfandMonth = adjustedMonth === 12;
  const isAvardadDay = isEsfandMonth && adjustedDay === 30 && isGregorianLeap;

  return {
    gregorianDate,
    zoroastrianYear,
    zoroastrianMonth: ZOROASTRIAN_MONTHS[adjustedMonth - 1],
    zoroastrianDay: ZOROASTRIAN_DAYS[adjustedDay - 1],
    dayNumber: adjustedDay,
    monthNumber: adjustedMonth,
    isGathaDay: false,
    isEsfandMonth,
    isAvardadDay
  };
}

export function formatZoroastrianDate(zDate: ZoroastrianDate): string {
  if (zDate.isGathaDay) {
    return `${zDate.gathaDay} (Gatha ${zDate.dayNumber}), ${zDate.zoroastrianYear} Z.E.`;
  }
  return `${zDate.zoroastrianDay}, ${zDate.zoroastrianMonth} ${zDate.dayNumber}, ${zDate.zoroastrianYear} Z.E.`;
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