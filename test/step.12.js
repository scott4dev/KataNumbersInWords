const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 100 to 199', () => {

	it('should convert 100', () => {
		const result = convert(100);
		result.should.equal('one hundred');
	});

	it('should convert 102', () => {
		const result = convert(102);
		result.should.equal('one hundred and two');
	});
	
	it('should convert 107', () => {
		const result = convert(107);
		result.should.equal('one hundred and seven');
	});

});
