const hourHand = document.getElementById("hour-hand")
const minuteHand = document.getElementById("minute-hand")
const secondHand = document.getElementById("second-hand")
const dayText = document.getElementById("date")
const timeAMPM = document.getElementById("time")
const monthText = document.getElementById("month")

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]

const animate = () => {
  const date = new Date()

  const hour = date.getHours() + date.getMinutes() / 60
  const min = date.getMinutes() + date.getSeconds() / 60
  const sec = date.getSeconds() + date.getMilliseconds() / 1000
  const day = date.getDate()
  const ampm = date.getHours() >= 12 ? "PM" : "AM"
  const month = months[date.getMonth()]

  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hour})`)
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * min})`)
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * sec})`)
  dayText.textContent = day
  timeAMPM.textContent = ampm
  monthText.textContent = month

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

