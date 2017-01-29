const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 70 to 79', () => {

	const sut = new Converter();

	it('should convert 70', () => {
		const result = sut.convert(70);
		result.should.equal('seventy');
	});

	it('should convert 73', () => {
		const result = sut.convert(73);
		result.should.equal('seventy-three');
	});
	
	it('should convert 77', () => {
		const result = sut.convert(77);
		result.should.equal('seventy-seven');
	});

});
