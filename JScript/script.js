const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active')
	}
}

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

toggle.addEventListener('click', e => {
	const main = document.querySelector('main')
	if (main.classList.contains('dark')) {
		main.classList.remove('dark')
		e.target.innerHTML = 'Dark mode'
	} else {
		main.classList.add('dark')
		e.target.innerHTML = 'Light mode'
	}
})

function setTime() {
	const time = new Date()
	const month = time.getMonth()
	const day = time.getDay()
	const date = time.getDate()
	const hours = time.getHours()
	const hoursForClock = hours % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()
	const ampm = hours >= 2 ? 'PM' : 'AM'

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0,	11,	0, 360)}deg)`
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,	0,	59,	0,	360)}deg)`
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,	0,	59,	0,	360)}deg)`

	timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)

// const buttons = document.querySelectorAll('.sign-in')

// buttons.forEach(button => {
// 	button.addEventListener('click', function(e)  {
// 		const x = e.clientX
// 		const y = e.clientY

// 		const buttonTop = e.target.offsetTop
// 		const buttonLeft = e.target.offsetLeft

// 		const xInside = x - buttonLeft
// 		const yInside = y - buttonTop

// 		const circle = document.createElement('span')
// 		circle.classList.add('circle')
// 		circle.style.top = yInside + 'px'
// 		circle.style.left = xInside + 'px'

// 		this.appendChild(circle)
// 	})
// })
