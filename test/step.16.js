const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert millions', () => {

	it('should convert 1.000.000', () => {
		const result = convert(1000000);
		result.should.equal('one million');
	});

	it('should convert 1.234.567', () => {
		const result = convert(1234567);
		result.should.equal('one million, two hundred and thirty-four thousand, five hundred and sixty-seven');
	});

	it('should convert 999.999.999', () => {
		const result = convert(999999999);
		result.should.equal('nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine');
	});
});
