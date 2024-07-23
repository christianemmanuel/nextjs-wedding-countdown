import { daysUntilTargetDate } from "../src/utils/dateUtils";

const targetDate = new Date(2024, 11, 4); // December 4, 2024

describe("daysUntilTargetDate", () => {
  it("should return the correct number of days until the target date", () => {
    const currentDate = new Date(2024, 11, 1); // December 1, 2024

    const result = daysUntilTargetDate(currentDate, targetDate);
    expect(result).toBe(3); // 3 days remaining

    console.log(`TEST: ${result} days before married`);
  });

  it("should return 0 if the current date is the same as the target date", () => {
    const currentDate = new Date(2024, 11, 4); // December 4, 2024

    const result = daysUntilTargetDate(currentDate, targetDate);
    expect(result).toBe(0); // 0 days remaining

    console.log(`TEST: today is our wedding day`);
  });

  it("should return a negative number if the current date is after the target date", () => {
    const currentDate = new Date(2024, 11, 5); // December 5, 2024

    const result = daysUntilTargetDate(currentDate, targetDate);
    expect(result).toBe(-1); // -1 days remaining

    console.log(`TEST: the wedding was a day ago`);
  });
});
