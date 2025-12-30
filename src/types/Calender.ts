export type CalenderProps = {
  date: string;
};

export type DateProps = {
  day: number;
  month: string;
  year: number;
};

export type EmptyDaysProps = {
  daysToShift: number;
};

export type DaysProps = {
  dates: Array<number>;
  day: number;
};
