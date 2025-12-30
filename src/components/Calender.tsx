import getDateDetails from "../hooks/getDateDetails";
import isValidDateFormat from "../hooks/isValidDateFormat";
import classes from "../styles/Calender.module.css";
import type { CalenderProps } from "../types/Calender";
import { getDays, getMonthInNumber } from "../utils/calender";
import Days from "./Days";
import EmptyDays from "./EmptyDays";
import Invalid from "./Invalid";
import Week from "./Week";

const Calender = ({ date }: CalenderProps) => {
  const isValid = isValidDateFormat(date);

  if (!isValid) {
    return <Invalid />;
  }

  const { day, month, year } = getDateDetails(date);

  const DATES = new Array(getDays(month, year)).fill(null);

  const DAYS_TO_SHIFT = new Date(year, getMonthInNumber(month), 1).getDay();
  
  return (
    <div className={classes.container}>
      <div className={classes.year} data-testid="month_year">
        {month} {year}
      </div>
      <div className={classes.week} data-testid="week">
        <Week />
        <EmptyDays daysToShift={DAYS_TO_SHIFT} />
        {/* Calender Days */}
        <Days dates={DATES} day={day} />
      </div>
    </div>
  );
};

export default Calender;
