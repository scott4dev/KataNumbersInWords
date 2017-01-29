'use strict';

const lessThanHundred = require('./lessThanHundred');

const Converter = class Converter {

	constructor() {
		this.lessThanHundred = lessThanHundred;
	}

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

}

module.exports = Converter;
