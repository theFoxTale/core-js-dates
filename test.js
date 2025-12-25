function getWorkSchedule(period, countWorkDays, countOffDays) {
  const [startDay, startMonth, startYear] = period.start.split('-').map(Number);
  const [endDay, endMonth, endYear] = period.end.split('-').map(Number);

  const currentDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  let counter = 0;
  const workSchedule = [];
  while (currentDate <= endDate) {
    if (counter < countWorkDays) {
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      workSchedule.push(`${day}-${month}-${year}`);
    }
    counter = (counter + 1) % (countWorkDays + countOffDays);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return workSchedule;
}

console.log(getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3));
// ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']