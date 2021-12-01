const monthName = new Map<number, string>([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

const monthNumberToMonthName = (monthNumber: number): string => {
  const name = monthName.get(monthNumber);
  const InvalidMonthNumber = "InvalidMonthNumber";
  return name == undefined ? InvalidMonthNumber : name;
};

export default monthNumberToMonthName;
