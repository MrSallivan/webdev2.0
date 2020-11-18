function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


$('#submitButton').click(function() {
	  var errorMessage = "";
     var fieldsMissing = "";

	if ( isEmail($('#email').val()) == false ) {
		errorMessage += '<p>email is not valid</p>'
	}
	if ( $.isNumeric($('#phone').val()) == false) {
		errorMessage += '<p>phone is not number</p>'
	}
	if ( $('#password').val() !== $('passwordConf').val() ) {
		errorMessage += '<p>passwords do not match </p>'
	}
	if ( errorMessage != '') {
		$('.error_massege').html(errorMessage)
		$('.error_massege').css({'display':'block', 'border':'1px solid red'})
	}

});