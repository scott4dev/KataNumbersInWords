'use strict';

const lessThanHundred = require('./lessThanHundred');

const convert = (number) => {

	if (number < 0)
		return 'not yet supported';

	if (number > 999) {
		const module = number % 1000;
		const x = parseInt(number / 1000);
		if (module == 0) {
			return convert(x) + ' thousand';
		}
		return convert(x) + ' thousand, ' + convert(module);
	}

	if (number > 99) {
		const module = number % 100;
		const x = parseInt(number / 100);
		if (module == 0) {
			return lessThanHundred(x) + ' hundred';
		}
		return lessThanHundred(x) + ' hundred and ' + lessThanHundred(module);
	}

	return lessThanHundred(number);
}

module.exports = convert;
