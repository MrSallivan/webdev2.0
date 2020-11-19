$('.toggleButton').hover(function () {
	$(this).addClass('highlighted')
}, function () {
	$(this).removeClass('highlighted')
})
$('.toggleButton').click(function () {
	$(this).toggleClass('active')
	$(this).removeClass('highlighted')

	let panelId = $(this).attr('id') + 'Panel'
	$('#' + panelId).toggle()
})

$('textarea').height($(window).height() - $('#header').height() - 20)
$('.panel').height($(window).height() - $('#header').height() - 20)
$('.panel').width(($(window).width() / 2) - 10)

$('textarea').on('change keyup paste', function () {
	$('iframe').contents().find('html').html($('#htmlPanel').val())
})