'use strict';

const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 80 to 89', () => {

	it('should convert 80', () => {
		const result = convert(80);
		result.should.equal('eighty');
	});

	it('should convert 82', () => {
		const result = convert(82);
		result.should.equal('eighty-two');
	});

	it('should convert 88', () => {
		const result = convert(88);
		result.should.equal('eighty-eight');
	});
});
