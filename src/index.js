'use strict';

const lessThanHundred = require('./lessThanHundred');

const separator = {
	100: ' and',
	1000: ',',
	1000000: ','
};

const suffix = {
	100: 'hundred',
	1000: 'thousand',
	1000000: 'million'
};

const f = (input, divider) => {
	const module = input % divider;
	const quotient = parseInt(input / divider);
	if (module == 0) {
		return convert(quotient) + ' ' + suffix[divider];
	}
	return convert(quotient) + ' ' + suffix[divider] + `${separator[divider]} ` + convert(module);
}

const convert = (input) => {

	if (input < 0)
		return 'not yet supported';

	if (Number.isInteger(input) == false)
		return 'not yet supported';

	if (input >= 1000000) {
		return f(input, 1000000);
	}

	if (input >= 1000) {
		return f(input, 1000);
	}

	if (input >= 100) {
		return f(input, 100);
	}

	return lessThanHundred(input);
}

module.exports = convert;
