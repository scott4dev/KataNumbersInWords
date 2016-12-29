'use strict';

const Converter = class Converter {

	convert(number) {
		const numbers = ['zero', 'one', 'two'];
		return numbers[number];
	}
}

module.exports = Converter;
