const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 40 to 49', () => {

	it('should convert 30', () => {
		const result = convert(40);
		result.should.equal('forty');
	});

	it('should convert 42', () => {
		const result = convert(42);
		result.should.equal('forty-two');
	});

	it('should convert 39', () => {
		const result = convert(48);
		result.should.equal('forty-eight');
	});

});
