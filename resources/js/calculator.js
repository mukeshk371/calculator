function appendText(number) {
	$('.display-input').val($('.display-input').val() + number);
}

function cancel() {
	$('.display-input').val('');
}

function equal() {
	$('.display-input').val(eval($('.display-input').val()));
}