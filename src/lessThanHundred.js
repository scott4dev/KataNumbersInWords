'use strict';


const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const convert = (input) => {

	if (input > 19) {
		const x = parseInt(input / 10);
		const firstDigitIndex = input % 10;
		if (firstDigitIndex > 0) {
			return `${tens[x]}-${convert(firstDigitIndex)}`;
		}
		return `${tens[x]}`;
	}

	return numbers[input];
}

module.exports = convert;