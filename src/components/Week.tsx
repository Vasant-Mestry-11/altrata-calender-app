const Week = () => {
  const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <>
      {WEEKDAYS.map((day) => (
        <span data-testid={day} key={day}>
          {day}
        </span>
      ))}
    </>
  );
};

export default Week;
