function getNextFridayThe13th(date) {
  const currentDay = new Date(date);
  currentDay.setDate(13);

  if (currentDay <= date) {
    currentDay.setMonth(currentDay.getMonth() + 1);
  }
  console.log("INIT", currentDay);

  const fridayIndex = 5;
  while (currentDay.getDay() !== fridayIndex) {
    currentDay.setMonth(currentDay.getMonth() + 1);
    console.log("MONTH", currentDay, currentDay.getDay());
  }

  return currentDay;
}

console.log(getNextFridayThe13th(new Date(2023, 1, 1)));
