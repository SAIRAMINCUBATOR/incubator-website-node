import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function FormatDate(dateS: Date) {
  // Function to add ordinal suffix to the day
  function addOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    } else {
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    }
  }

  // Array of month names
  const monthNames = [
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
  if (dateS) {
    const date = new Date(dateS);

    // Format the date
    const formattedDate = `${addOrdinalSuffix(date?.getDate())} ${
      monthNames[date?.getMonth()]
    } ${date?.getFullYear()}`;
    return formattedDate;
  } else {
    return "";
  }
}
