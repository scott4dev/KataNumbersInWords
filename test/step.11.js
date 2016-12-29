const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 90 to 99', () => {

	it('should convert 90', () => {
		const sut = new Converter();
		const result = sut.convert(90);
		result.should.equal('ninety');
	});

	it('should convert 92', () => {
		const sut = new Converter();
		const result = sut.convert(92);
		result.should.equal('ninety-two');
	});
	
	it('should convert 97', () => {
		const sut = new Converter();
		const result = sut.convert(97);
		result.should.equal('ninety-seven');
	});

});
