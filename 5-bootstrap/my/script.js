$('#mymodal').on('show.bs.modal', function(event){
	let button = $(event.relatedTarget)
	let recipient = button.data('name')
	let modal = $(this)
	modal.find('.modal-title').text(`Сообщение для ${recipient} кнопки`)
})
$('#mymodal').on('hidden.bs.modal', function(event){
	$('#alertmodal').removeClass('d-none').css({
		'position': 'absolute', 
		'top': '350px', 
		'right':'100px'})
})