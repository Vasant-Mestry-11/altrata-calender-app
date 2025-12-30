import classes from "../styles/Days.module.css";
import type { DaysProps } from "../types/Calender";

const Days = ({ dates, day }: DaysProps) => {
  return dates.map((_, i) => (
    <span
      key={i + 1}
      className={`${i + 1 === day ? `${classes.active}` : ""}`}
      data-testid={`Day-${i + 1} ${i + 1 === day ? `active-day-${day}` : ""}`}
    >
      {i + 1}
    </span>
  ));
};

export default Days;
