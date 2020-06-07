function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	var finalSum = 0;

	for (i = 0; i < arr.length; i++) {
		finalSum += arr[i];
	}

	return finalSum;
}

function multiply (arr) {
	var finalProduct = 1;

	for (i = 0; i < arr.length; i++) {
		finalProduct *= arr[i];
	}

	return finalProduct;
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}