'use strict';

const Converter = class Converter {

	convert(number) {

		const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		const tens = ['', '', 'twenty', 'thirty', 'forty']

		if (number > 19) {
			const x = parseInt(number / 10);
			const firstDigitIndex = number % 10;
			if (firstDigitIndex > 0) {
				return `${tens[x]}-${numbers[firstDigitIndex]}`;
			}
			return `${tens[x]}`;
		}

		return numbers[number];
	}
}

module.exports = Converter;
