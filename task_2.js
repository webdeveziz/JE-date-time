// Задание 2

const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24)

function getDaysBeforeBirthday(nextBirthdayDate) {
  const dateBirth = new Date(nextBirthdayDate).getTime()
  const now = Date.now()
  const ms = dateBirth - now
  return convertMsToDays(ms)
}

console.log(getDaysBeforeBirthday(new Date(2022, 1, 28)))
