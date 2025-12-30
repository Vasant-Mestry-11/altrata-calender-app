const isValidDateFormat = (date: string) => {
  // assumed format is mm/dd/yyyy
  const splittedDate = date.split("/");
  const isValidLength = splittedDate.length === 3;
  const isValidMonth =
    Boolean(parseInt(splittedDate[0])) && parseInt(splittedDate[0]) <= 12;
  const isValidDay =
    Boolean(parseInt(splittedDate[1])) && parseInt(splittedDate[1]) <= 31;

  // date object treat 0 year as 1900
  const isValidYear =
    parseInt(splittedDate[2]) < 100
      ? 1900 + parseInt(splittedDate[2])
      : parseInt(splittedDate[2]);

  return isValidLength && isValidMonth && isValidDay && isValidYear;
};

export default isValidDateFormat;
