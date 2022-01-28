// Задание 1

function getDateFormat(date, separator = '.') {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  if (day < 10) day = '0' + day

  return `${day}${separator}${month}${separator}${year}`
}

console.log(getDateFormat(new Date(), '-'))

// function getDateFormat(date, separator = '.') {
//   const str = []
//   date.split('').forEach((el) => {
//     if (isNaN(Number(el))) {
//       str.push(el)
//     }
//   }) // Определяем какой разделитель находится изначально в date

//   const newDate = date
//     .split(str[0])
//     .map((el, i, arr) => {
//       if (arr[i].length < 2) return 0 + el
//       else return el
//     })
//     .join(separator) // день-месяц-год”

//   return newDate
// }
