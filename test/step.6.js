const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 40 to 49', () => {

	const sut = new Converter();

	it('should convert 30', () => {
		const result = sut.convert(40);
		result.should.equal('forty');
	});

	it('should convert 42', () => {
		const result = sut.convert(42);
		result.should.equal('forty-two');
	});

	it('should convert 39', () => {
		const result = sut.convert(48);
		result.should.equal('forty-eight');
	});

});
