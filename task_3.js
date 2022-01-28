// Задание 3

function addDays(date, days = 1) {
  const updateDate = date.getTime() + days * 24 * 60 * 60 * 1000
  return new Date(updateDate)
}

console.log(addDays(new Date(2022, 1, 28), 10))
