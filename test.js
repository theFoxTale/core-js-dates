function getWeekNumberByDate(date) {
  const thursdayIndex = 4;
  const firstJanuaryDay = new Date(date.getFullYear(), 0, 1);
  const januaryDayIndex = firstJanuaryDay.getDay();

  const firstThursdayShift =
    januaryDayIndex <= thursdayIndex
      ? thursdayIndex - januaryDayIndex
      : thursdayIndex - januaryDayIndex + 7;
  const firstThursday = new Date(date.getFullYear(), 0, 1 + firstThursdayShift);

  const weeksDifference = Math.round((date - firstThursday) / (1000 * 60 * 60 * 24 * 7));
  return Math.abs(weeksDifference) + 1;
}

console.log(getWeekNumberByDate(new Date(2024, 0, 3)));
console.log(getWeekNumberByDate(new Date(2024, 0, 31)));
console.log(getWeekNumberByDate(new Date(2024, 1, 23)));
