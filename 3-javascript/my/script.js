let start = new Date().getTime()

function showFig() {
	document.querySelector('#shape').style.display = 'block'
	start = new Date().getTime()
}


document.querySelector('#shape').onclick = function() {
	let endTime = new Date().getTime()
	let scoreTime = (endTime - start) / 1000
	document.querySelector('#shape').style.display = 'none'
	document.querySelector('#timeTaken').textContent = `${scoreTime}sec`

	showFig()
}