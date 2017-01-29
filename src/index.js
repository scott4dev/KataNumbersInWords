'use strict';

const Converter = class Converter {

	convert(number) {

		const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

		if (number > 99) {
			if(number % 100 == 0){
				return this.convert(parseInt(number/100)) + ' hundred';
			}
			return this.convert(parseInt(number/100)) + ' hundred and ' + this.convert(number % 100) ;
		}

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
