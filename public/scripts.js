let display = document.querySelector('#result')

function addToDisplay(input) {
	if (display.value !== 'NIGGA') {
		display.value += input
	} else {
		clearForm()
		display.value += input
	}
}
function calculate() {
	try { display.value = eval(display.value) }
	catch (error) {
		display.value = 'NIGGA'
	}
}
function clearForm() {
	display.value = ''
}