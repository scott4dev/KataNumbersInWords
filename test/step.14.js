const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 1000 to 9999', () => {

	it('should convert 1000', () => {
		const result = convert(1000);
		result.should.equal('one thousand');
	});

	it('should convert 1519', () => {
		const result = convert(1519);
		result.should.equal('one thousand, five hundred and nineteen');
	});

	it('should convert 1940', () => {
		const result = convert(1940);
		result.should.equal('one thousand, nine hundred and forty');
	});

	it('should convert 9999', () => {
		const result = convert(9999);
		result.should.equal('nine thousand, nine hundred and ninety-nine');
	});

	it('should convert 2001', () => {
		const result = convert(2001);
		result.should.equal('two thousand, one');
	});

	it('should convert 4011', () => {
		const result = convert(4011);
		result.should.equal('four thousand, eleven');
	});
});
