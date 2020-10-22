let start = new Date().getTime()

function showFig() {
	document.querySelector('#shape').style.display = 'block'
	start = new Date().getTime()
}

function showEnyTimeFig() {
	setTimeout(showFig, Math.random() * 1000)
}

function randomColor() {
	let stringMas = '0123456789ABCDEF'.split('')
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += stringMas[Math.floor(Math.random() * 16)]
	}
	return color
}


document.querySelector('#shape').onclick = function () {
	let endTime = new Date().getTime()
	let scoreTime = (endTime - start) / 1000
	let rand = Math.random()
	let width = Math.floor((rand * 75) + 15)
	let height = Math.floor((rand * 75) + 15)
	document.querySelector('#shape').style.display = 'none'
	document.querySelector('#timeTaken').textContent = `${scoreTime}sec`
	document.querySelector('#shape').style.backgroundColor = `${randomColor()}`
	if (Math.random() > 0.5) {
		document.querySelector('#shape').style.borderRadius = '50%'
	} else {
		document.querySelector('#shape').style.borderRadius = '0'
	}
	document.querySelector('#shape').style.top = `${Math.random() * 80}%`
	document.querySelector('#shape').style.left = `${(Math.random() * 80)}%`
	document.querySelector('#shape').style.width = `${width}px`
	document.querySelector('#shape').style.height = `${height}px`

	showEnyTimeFig()
}