'use strict';

const lessThanHundred = require('./lessThanHundred');

const convert = (number) => {

	if (number < 0)
		return 'not yet supported';

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
