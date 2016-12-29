const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 50 to 59', () => {

	it('should convert 30', () => {
		const sut = new Converter();
		const result = sut.convert(50);
		result.should.equal('fifty');
	});

	it('should convert 42', () => {
		const sut = new Converter();
		const result = sut.convert(52);
		result.should.equal('fifty-two');
	});
	
	it('should convert 39', () => {
		const sut = new Converter();
		const result = sut.convert(58);
		result.should.equal('fifty-eight');
	});

});
