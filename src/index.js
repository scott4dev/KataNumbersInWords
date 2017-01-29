'use strict';

const Converter = class Converter {

	convert(number) {
		if (number > 99) {
			const module = number % 100;
			const x = parseInt(number / 100);
			if (module == 0) {
				return this.lessThanHundred(x) + ' hundred';
			}
			return this.lessThanHundred(x) + ' hundred and ' + this.lessThanHundred(module);
		}

		return this.lessThanHundred(number);
	}

	lessThanHundred(number) {
		const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
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
