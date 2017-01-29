'use strict';

const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 80 to 89', () => {

	const sut = new Converter();

	it('should convert 80', () => {
		const result = sut.convert(80);
		result.should.equal('eighty');
	});

	it('should convert 82', () => {
		const result = sut.convert(82);
		result.should.equal('eighty-two');
	});

	it('should convert 88', () => {
		const result = sut.convert(88);
		result.should.equal('eighty-eight');
	});
});
