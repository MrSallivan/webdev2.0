$('.drag').draggable({ cursor: 'move', cursorAt: { top: 0, left: 0 }, axis: 'y' })
$('p').draggable({ containment: "parent" })

$('.resizeble').resizable({
	grid: 50,
	alsoResize: '.also',
	resize: function (event, ui) {
		if ($('.resizeble').width() > 300) {
			alert('Стой разогнался!!')
		}
	}
})

$('.also').resizable()
$('.small').draggable({ cursor: 'move' })
$('.big').droppable({
	drop: function (event, ui) {
		console.log(event)
		console.log(ui)
		$(this).addClass('blue').find('.par').html('Круто!')
	}
})

$("#accordion").accordion({
	collapsible: true
});