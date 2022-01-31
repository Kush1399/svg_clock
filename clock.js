const hourHand = document.getElementById("hour-hand")
const minuteHand = document.getElementById("minute-hand")
const secondHand = document.getElementById("second-hand")
const dayText = document.getElementById("date")
const timeAMPM = document.getElementById("time")

const animate = () => {
  const date = new Date()

  const hour = date.getHours() + date.getMinutes() / 60
  const min = date.getMinutes() + date.getSeconds() / 60
  const sec = date.getSeconds() + date.getMilliseconds() / 1000
  const day = date.getDate()
  const ampm = date.getHours() >= 12 ? "PM" : "AM"

  hourHand.setAttribute("transform", `rotate(${(360 / 12) * hour})`)
  minuteHand.setAttribute("transform", `rotate(${(360 / 60) * min})`)
  secondHand.setAttribute("transform", `rotate(${(360 / 60) * sec})`)
  dayText.textContent = day
  timeAMPM.textContent = ampm

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

