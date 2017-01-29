const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 100000 to 999999', () => {

	it('should convert 100000', () => {
		const result = convert(100000);
		result.should.equal('one hundred thousand');
	});

	it('should convert 123456', () => {
		const result = convert(123456);
		result.should.equal('one hundred and twenty-three thousand, four hundred and fifty-six');
	});

	it('should convert 999999', () => {
		const result = convert(999999);
		result.should.equal('nine hundred and ninety-nine thousand, nine hundred and ninety-nine');
	});
});
