const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 30 to 39', () => {

	const sut = new Converter();
	
	it('should convert 30', () => {
		const result = sut.convert(30);
		result.should.equal('thirty');
	});

	it('should convert 31', () => {
		const result = sut.convert(31);
		result.should.equal('thirty-one');
	});
	
	it('should convert 39', () => {
		const result = sut.convert(39);
		result.should.equal('thirty-nine');
	});

});
