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
  gregorianDateTime: string;
  gregorianDate: string;
  zoroastrianDate: string;
  rozName: string;
  isGatha: boolean;
  nextMonthlyRooze: {
    gregorianDateTime: string;
    gregorian: string;
    rozName: string;
  };
  salrooz: {
    gregorianDateTime: string;
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
  gregorianDateTime: string;
  gregorianDate: string;
  zoroastrianDate: ZoroastrianDate;
  isSkipped?: boolean;
  reason?: string;
}

export function convertToZoroastrianDate(input: { deathDateTimeLocal: string; city: string; state: string }): ZoroastrianDate {
  console.log('Converting date:', input);
  const result = zoroastrianCalendarCalculator(input);
  console.log('Conversion result:', result);
  
  // Create backward-compatible output using dargozasht date
  const dargozashtDateTime = result.adjustedRoozEDargozasht;
  const dargozashtDate = dargozashtDateTime.slice(0, 10);
  const rozName = result.rozNames.roozEDargozasht;
  const roozESevvomDateTime = result.roozESevvom;
  const roozESevvomDate = roozESevvomDateTime.slice(0, 10);
  const salroozDateTime = result.salrooz;
  const salroozDate = salroozDateTime.slice(0, 10);

  return {
    gregorianDateTime: dargozashtDateTime,
    gregorianDate: dargozashtDate,
    zoroastrianDate: `Day ${rozName}`,
    rozName: rozName,
    isGatha: false,
    nextMonthlyRooze: {
      gregorianDateTime: roozESevvomDate,
      gregorian: roozESevvomDate,
      rozName: result.rozNames.roozESevvom
    },
    salrooz: {
      gregorianDateTime: salroozDateTime,
      gregorian: salroozDate,
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

// US city coordinates lookup (approximate)
const US_CITY_COORDS: Record<string, { lat: number; lon: number }> = {
  "irvine,ca": { lat: 33.6846, lon: -117.8265 },
  "los angeles,ca": { lat: 34.0522, lon: -118.2437 },
  "san francisco,ca": { lat: 37.7749, lon: -122.4194 },
  "san diego,ca": { lat: 32.7157, lon: -117.1611 },
  "houston,tx": { lat: 29.7604, lon: -95.3698 },
  "chicago,il": { lat: 41.8781, lon: -87.6298 },
  "new york,ny": { lat: 40.7128, lon: -74.0060 },
  "phoenix,az": { lat: 33.4484, lon: -112.0740 },
  "seattle,wa": { lat: 47.6062, lon: -122.3321 },
  "miami,fl": { lat: 25.7617, lon: -80.1918 },
  "boston,ma": { lat: 42.3601, lon: -71.0589 },
  "denver,co": { lat: 39.7392, lon: -104.9903 },
  "atlanta,ga": { lat: 33.7490, lon: -84.3880 },
  "dallas,tx": { lat: 32.7767, lon: -96.7970 },
  "philadelphia,pa": { lat: 39.9526, lon: -75.1652 },
  "washington,dc": { lat: 38.9072, lon: -77.0369 },
  "las vegas,nv": { lat: 36.1699, lon: -115.1398 },
  "portland,or": { lat: 45.5152, lon: -122.6784 },
  "austin,tx": { lat: 30.2672, lon: -97.7431 },
  "san jose,ca": { lat: 37.3382, lon: -121.8863 },
};

// Calculate sunrise time using solar position algorithm
function calculateSunrise(lat: number, lon: number, date: Date): Date {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Solar declination
  const declination = -23.45 * Math.cos((2 * Math.PI / 365) * (dayOfYear + 10));
  const declinationRad = declination * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  
  // Hour angle at sunrise
  const cosHourAngle = -Math.tan(latRad) * Math.tan(declinationRad);
  const hourAngle = Math.acos(Math.max(-1, Math.min(1, cosHourAngle))) * (180 / Math.PI);
  
  // Sunrise in hours (solar noon is ~12:00 + longitude correction)
  const solarNoon = 12 - (lon / 15); // Simple longitude correction
  const sunriseHour = solarNoon - (hourAngle / 15);
  
  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(sunriseHour), Math.round((sunriseHour % 1) * 60), 0, 0);
  
  return sunrise;
}

function zoroastrianCalendarCalculator(input: { deathDateTimeLocal: string; city: string; state: string }) {
  const { deathDateTimeLocal, city, state } = input;

  // 1. Get latitude & longitude from lookup table
  const cityKey = `${city.toLowerCase().trim()},${state.toLowerCase().trim()}`;
  const coords = US_CITY_COORDS[cityKey];
  
  // Default to Los Angeles if city not found
  const lat = coords?.lat ?? 34.0522;
  const lon = coords?.lon ?? -118.2437;

  // 2. Parse the local date/time
  const localDate = new Date(deathDateTimeLocal);
  
  // 3. Calculate sunrise for that date and location
  const sunriseLocal = calculateSunrise(lat, lon, localDate);

  // 4. Adjust if before sunrise - use previous Zoroastrian day
  let effectiveDate = new Date(localDate);
  if (localDate < sunriseLocal) {
    effectiveDate = new Date(localDate.getTime() - 86400000); // subtract 1 day
  }

  // 5. Rōz name logic (March 21 = Hormozd = index 0)
  const baseDate = new Date(Date.UTC(effectiveDate.getUTCFullYear(), 2, 21));
  if (effectiveDate < baseDate) baseDate.setUTCFullYear(baseDate.getUTCFullYear() - 1);
  const msPerDay = 86400000;

  const rozNames = [
    "Hormozd", "Bahman", "Ardibehesht", "Shahrivar", "Spandarmad",
    "Khordad", "Amordad", "Day-pa-Adar", "Adar", "Aban",
    "Khorshed", "Mah", "Tir", "Gosh", "Day-pa-Mihr",
    "Mihr", "Srosh", "Rashn", "Fravashi", "Verethraghna",
    "Bahram", "Ram", "Govad", "Day-pa-Den", "Den",
    "Ard", "Ashtad", "Asman", "Zam", "Matraespand"
  ];

  const getRozName = (date) => {
    const offsetDays = Math.floor((date.getTime() - baseDate.getTime()) / msPerDay);
    return rozNames[offsetDays % 30];
  };

  // 6. Ritual dates
  const dargozasht = effectiveDate;
  const sevvom = new Date(dargozasht.getTime() + 2 * msPerDay);
  const chaharom = new Date(dargozasht.getTime() + 3 * msPerDay);
  const dahhom = new Date(dargozasht.getTime() + 9 * msPerDay);
  const siroozeh = new Date(dargozasht.getTime() + 29 * msPerDay);
  const salrooz = new Date(Date.UTC(dargozasht.getUTCFullYear() + 1, dargozasht.getUTCMonth(), dargozasht.getUTCDate()));

  return {
    adjustedRoozEDargozasht: dargozasht.toISOString(),
    roozESevvom: sevvom.toISOString(),
    roozEChaharom: chaharom.toISOString(),
    roozEDahhom: dahhom.toISOString(),
    siroozeh: siroozeh.toISOString(),
    salrooz: salrooz.toISOString(),
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

export function calculateMonthlyRoze(deathDate: Date, city: string, state: string, numberOfMonths: number = 12): MonthlyRoze[] {
  const deathZoroastrianDate = convertToZoroastrianDate({
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
      gregorianDateTime: new Date().toISOString(), // placeholder
      gregorianDate: new Date().toISOString().slice(0, 10), // placeholder
      zoroastrianDate: deathZoroastrianDate,
      isSkipped: true,
      reason: "No corresponding day in Farvardin for Gatha death"
    });

    // From Ordibehesht onward, observe on the same Farvardin day
    for (let i = 2; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      const correspondingDay = deathZoroastrianDate.dayNumber; // Use same day number
      
      const monthZoroastrianDate = convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1],
        gregorianDateTime: monthDate.toISOString(),
        gregorianDate: monthDate.toISOString().slice(0, 10),
        zoroastrianDate: monthZoroastrianDate
      });
    }
  } 
  // If death occurs on Avardād Day (leap year 30th day of Esfand)
  else if (deathZoroastrianDate.isAvardadDay) {
    // Monthly Rōz-e observed on same Farvardin day in following months
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      const monthZoroastrianDate = convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDateTime: monthDate.toISOString(),
        gregorianDate: monthDate.toISOString().slice(0, 10),
        zoroastrianDate: monthZoroastrianDate
      });
    }
  }
  // Regular death (including regular days of Esfand)
  else {
    for (let i = 1; i <= numberOfMonths; i++) {
      const monthDate = addMonths(deathDate, i);
      
      const monthZoroastrianDate = convertToZoroastrianDate({
        deathDateTimeLocal: monthDate.toISOString(),
        city: city,
        state: state
      });
      
      monthlyRoze.push({
        month: ZOROASTRIAN_MONTHS[i - 1] || `Month ${i}`,
        gregorianDateTime: monthDate.toISOString(),
        gregorianDate: monthDate.toISOString().slice(0, 10),
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
