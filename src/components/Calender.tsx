import classes from "../styles/Calender.module.css";

const Calender = () => {
  const DATES = new Array(31).fill(1);
  console.log(DATES);
  return (
    <div className={classes.container}>
      <div className={classes.year}>March 2020</div>
      <div className={classes.week}>
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        {DATES.map((_, i) => (
          <span key={i + 1}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
};

export default Calender;
