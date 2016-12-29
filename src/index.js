'use strict';

const Converter = class Converter {

	convert(number) {
		const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];
		return numbers[number];
	}
}

module.exports = Converter;
