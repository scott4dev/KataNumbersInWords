'use strict';

const Converter = class Converter {

	convert(number) {

		const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

		if (number > 20) {
			const index = number - 20;
			return `twenty-${numbers[index]}`;
		}

		return numbers[number];
	}
}

module.exports = Converter;
