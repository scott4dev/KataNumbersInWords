'use strict';

const lessThanHundred = require('./lessThanHundred');

const suffix = {
	100: 'and',
	1000: ',',
	1000000: ''
};

const f = (input, divider, suffix, separator) => {
	const module = input % divider;
	const quotient = parseInt(input / divider);
	if (module == 0) {
		return convert(quotient) + ' ' + suffix;
	}
	return convert(quotient) + ' ' + suffix + `${separator} ` + convert(module);
}

const convert = (input) => {

	if (input < 0)
		return 'not yet supported';

	if (Number.isInteger(input) == false)
		return 'not yet supported';

	if (input >= 1000000) {
		return f(input, 1000000, 'million', ',');
	}

	if (input >= 1000) {
		return f(input, 1000, 'thousand', ',');
	}

	if (input >= 100) {
		return f(input, 100, 'hundred', ' and');
	}

	return lessThanHundred(input);
}

module.exports = convert;
