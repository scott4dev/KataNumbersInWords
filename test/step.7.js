const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 50 to 59', () => {

	it('should convert 50', () => {
		const result = convert(50);
		result.should.equal('fifty');
	});

	it('should convert 52', () => {
		const result = convert(52);
		result.should.equal('fifty-two');
	});
	
	it('should convert 58', () => {
		const result = convert(58);
		result.should.equal('fifty-eight');
	});

});
