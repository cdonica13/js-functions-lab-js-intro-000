/*global describe, it*/

function happyHolidays () {
  return "Happy holidays!"
}

function happyHolidayTo(name) {
  return "Happy holidays, ${name}!"
}

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday, days) {
  return "It/'s ${days} until ${holiday}!'"
}
