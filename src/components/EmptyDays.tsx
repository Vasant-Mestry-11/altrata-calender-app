import type { EmptyDaysProps } from "../types/Calender";

const EmptyDays = ({ daysToShift }: EmptyDaysProps) => {
  return Array.from({ length: daysToShift }).map((_, i) => (
    <span key={i} data-testid="empty-box"></span>
  ));
};

export default EmptyDays;
