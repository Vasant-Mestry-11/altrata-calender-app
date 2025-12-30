export const getMonth: Record<string, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const getDays = (month: string, year: number) => {
  const WholeMonth = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ];

  const LeapMonth = ["February"];

  if (LeapMonth.includes(month)) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }

  if (WholeMonth.includes(month)) return 31;

  return 30;
};

export const getMonthInNumber = (month: string): number => {
  const monthsList: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  return monthsList[month];
};
