'use strict';

const lessThanHundred = require('./lessThanHundred');


const convert = (input) => {

	if (input < 0)
		return 'not yet supported';

	if (Number.isInteger(input) == false)
		return 'not yet supported';

	if (input > 999999) {
		const module = input % 1000000;
		const x = parseInt(input / 1000000);
		if (module == 0) {
			return convert(x) + ' million';
		}
		return convert(x) + ' million, ' + convert(module);
	}

	if (input > 999) {
		const module = input % 1000;
		const x = parseInt(input / 1000);
		if (module == 0) {
			return convert(x) + ' thousand';
		}
		return convert(x) + ' thousand, ' + convert(module);
	}

	if (input > 99) {
		const module = input % 100;
		const x = parseInt(input / 100);
		if (module == 0) {
			return lessThanHundred(x) + ' hundred';
		}
		return lessThanHundred(x) + ' hundred and ' + lessThanHundred(module);
	}

	return lessThanHundred(input);
}

module.exports = convert;
