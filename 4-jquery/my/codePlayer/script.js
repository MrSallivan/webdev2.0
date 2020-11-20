function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$('.toggleButton').hover(function () {
	$(this).addClass('highlighted')
}, function () {
	$(this).removeClass('highlighted')
})
$('.toggleButton').click(function () {
	$(this).toggleClass('active')
	$(this).removeClass('highlighted')

	let panelId = $(this).attr('id') + 'Panel'
	$('#' + panelId).toggleClass('hidden')
	let numberOfActivePanel = 4 - $('.hidden').length
	$('.panel').width(($(window).width() / numberOfActivePanel) - 10)
})

$('textarea').height($(window).height() - $('#header').height() - 20)
$('.panel').height($(window).height() - $('#header').height() - 20)
$('.panel').width(($(window).width() / 2) - 10)

updateOutput()

$('textarea').on('change keyup paste', function () {
	updateOutput()
})
