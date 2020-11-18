$('.drag').draggable({cursor: 'move', cursorAt: {top:0, left:0}, axis:'y'})
$('p').draggable({containment: "parent"})

$('.resizeble').resizable({
	grid: 50,
	alsoResize: '.also',
	resize: function(event, ui) {
		if ( $('.resizeble').width() > 300 ) {
			alert('Стой разогнался!!')
		}
	}
})

$('.also').resizable()