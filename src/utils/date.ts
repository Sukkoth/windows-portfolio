export function getFormattedDate(date: Date = new Date()) {
  const month = date.getMonth() + 1; // Months are zero-based, so we need to add 1
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export function formatTime(timeToFormat: Date | string = new Date()) {
  let date;
  if (typeof timeToFormat === "string") date = new Date(timeToFormat);
  else date = timeToFormat;
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function getDayName(index: number, simple?: boolean) {
  const dates = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (index >= dates.length) return "N/A";
  return simple ? dates[index].slice(0, 3) : dates[index];
}

export function getGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else if (hours < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return greeting;
}

export function getFirstDayOfMonth(): [number, string] {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return [firstDayOfMonth.getDay(), daysOfWeek[firstDayOfMonth.getDay()]];
}

export function getDaysInMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-based index for month (0 = January, 11 = December)

  // Create a date for the first day of the next month, then subtract one day to get the last day of the current month
  const nextMonthFirstDay = new Date(year, month + 1, 1);
  const lastDayOfCurrentMonth = new Date(nextMonthFirstDay.getTime() - 1);

  return lastDayOfCurrentMonth.getDate();
}

export function calendarData(date: Date): {
  dayIndex: number;
  currentMonthLength: number;
  previousMonthLength: number;
} {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-based index for month (0 = January, 11 = December)

  // First day of the current month
  const firstDayOfMonth = new Date(year, month, 1);
  const dayIndex = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Length of the current month
  const nextMonthFirstDay = new Date(year, month + 1, 1);
  const lastDayOfCurrentMonth = new Date(nextMonthFirstDay.getTime() - 1);
  const currentMonthLength = lastDayOfCurrentMonth.getDate();

  // Length of the previous month
  const previousMonthLastDay = new Date(year, month, 0); // 0th day of current month is the last day of the previous month
  const previousMonthLength = previousMonthLastDay.getDate();

  return {
    dayIndex: dayIndex === 0 ? 7 : dayIndex, //I have treated sunday as the last day of the week
    currentMonthLength: currentMonthLength,
    previousMonthLength: previousMonthLength,
  };
}

export function getMonthName(monthNumber: number): string {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error(
      "Invalid month number. Please provide a number between 1 and 12."
    );
  }

  return monthNames[monthNumber - 1];
}

export function formatCalendarDate(): string {
  const date = new Date();
  // Define arrays for days and months
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract day of the week, day of the month, and month
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = monthsOfYear[date.getMonth()];

  // Format the date string
  return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}
