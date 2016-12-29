const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 40 to 49', () => {

	it('should convert 30', () => {
		const sut = new Converter();
		const result = sut.convert(40);
		result.should.equal('forty');
	});

	it('should convert 42', () => {
		const sut = new Converter();
		const result = sut.convert(42);
		result.should.equal('forty-two');
	});
	
	it('should convert 39', () => {
		const sut = new Converter();
		const result = sut.convert(48);
		result.should.equal('forty-eight');
	});

});
