import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Calender from "../components/Calender";

describe("Calender", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders calender", () => {
    render(<Calender date="03/12/2024" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("week")).toBeInTheDocument();
  });

  it("checks weekday names", () => {
    render(<Calender date="03/12/2024" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("week")).toBeInTheDocument();
    expect(screen.getByTestId("Su")).toBeInTheDocument();
    expect(screen.getByTestId("Mo")).toBeInTheDocument();
    expect(screen.getByTestId("Tu")).toBeInTheDocument();
    expect(screen.getByTestId("We")).toBeInTheDocument();
    expect(screen.getByTestId("Th")).toBeInTheDocument();
    expect(screen.getByTestId("Fr")).toBeInTheDocument();
    expect(screen.getByTestId("Sa")).toBeInTheDocument();
  });

  it("checks empty boxes", () => {
    render(<Calender date="03/12/2024" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("week")).toBeInTheDocument();
    const boxes = screen.getAllByTestId("empty-box");
    expect(boxes).toHaveLength(5);
  });

  it("checks current date highlighted", () => {
    render(<Calender date="03/12/2024" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("week")).toBeInTheDocument();
    expect(screen.getByTestId("Day-12 active-day-12")).toBeInTheDocument();
  });

  it("checks empty date", () => {
    render(<Calender date="" />);
    expect(screen.getByTestId("invalid-date")).toBeInTheDocument();
    expect(screen.getByTestId("invalid-date")).toHaveTextContent(
      "Invalid date format"
    );
  });

  it("checks date with /", () => {
    render(<Calender date="//" />);
    expect(screen.getByTestId("invalid-date")).toBeInTheDocument();
    expect(screen.getByTestId("invalid-date")).toHaveTextContent(
      "Invalid date format"
    );
  });

  it("checks year 1900", () => {
    render(<Calender date="1/1/1" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("month_year")).toHaveTextContent("January 1901");
  });

  it("checks 8/22/1521", () => {
    render(<Calender date="8/22/1521" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("month_year")).toHaveTextContent("August 1521");
    expect(screen.getByTestId("Day-22 active-day-22")).toBeInTheDocument();
  });

  it("checks leap year 2/22/2000 of 29 days", () => {
    render(<Calender date="2/22/2000" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("month_year")).toHaveTextContent("February 2000");
    expect(screen.getByTestId("Day-22 active-day-22")).toBeInTheDocument();
  });

  it("checks year 2/22/2001 of 29 days", () => {
    render(<Calender date="2/22/2001" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("month_year")).toHaveTextContent("February 2001");
    expect(screen.getByTestId("Day-22 active-day-22")).toBeInTheDocument();
  });

  it("checks year 4/22/2001 of 30 days", () => {
    render(<Calender date="4/22/2001" />);
    expect(screen.getByTestId("month_year")).toBeInTheDocument();
    expect(screen.getByTestId("month_year")).toHaveTextContent("April 2001");
    expect(screen.getByTestId("Day-22 active-day-22")).toBeInTheDocument();
  });
});
