import type { DateProps } from "../types/Calender";
import { getMonth } from "../utils/calender";

const getDateDetails = (date: string): DateProps => {
  // assuming that date format will be mm/dd/yyyy
  const splittedDate = date.split("/");

  const day = parseInt(splittedDate[1]);
  const month = getMonth[parseInt(splittedDate[0])];
  // date object treat 0 year as 1900
  const year =
    parseInt(splittedDate[2]) < 100
      ? 1900 + parseInt(splittedDate[2])
      : parseInt(splittedDate[2]);

  return {
    day,
    month,
    year,
  };
};

export default getDateDetails;
