function appendText(num) {
	$('.display-input').val($('.display-input').val() + num);
}

function equal() {
	$('.display-input').val(eval($('.display-input').val()));
}

function cancel() {
	$('.display-input').val('');
}