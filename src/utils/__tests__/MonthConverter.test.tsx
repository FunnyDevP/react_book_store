import ToMonthName from "../MonthConverter";

describe("Month Converter", () => {
  const testTable = [
    { month: 1, expectedVal: "January" },
    { month: 2, expectedVal: "February" },
    { month: 3, expectedVal: "March" },
    { month: 4, expectedVal: "April" },
    { month: 5, expectedVal: "May" },
    { month: 6, expectedVal: "June" },
    { month: 7, expectedVal: "July" },
    { month: 8, expectedVal: "August" },
    { month: 9, expectedVal: "September" },
    { month: 10, expectedVal: "October" },
    { month: 11, expectedVal: "November" },
    { month: 12, expectedVal: "December" },
    { month: 1234, expectedVal: "InvalidMonthNumber" },
  ];
  testTable.forEach(({ month, expectedVal }) => {
    it(`should return ${expectedVal} when input month number is ${month}`, () => {
      const result = ToMonthName(month);
      expect(result).toEqual(expectedVal);
    });
  });
});
