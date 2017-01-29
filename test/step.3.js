const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 14 to 19', () => {

	const sut = new Converter();

	it('should convert 13', () => {
		const result = sut.convert(13);
		result.should.equal('thirteen');
	});

	it('should convert 14', () => {
		const result = sut.convert(14);
		result.should.equal('fourteen');
	});

	it('should convert 15', () => {
		const result = sut.convert(15);
		result.should.equal('fifteen');
	});

	it('should convert 16', () => {
		const result = sut.convert(16);
		result.should.equal('sixteen');
	});

	it('should convert 17', () => {
		const result = sut.convert(17);
		result.should.equal('seventeen');
	});

	it('should convert 18', () => {
		const result = sut.convert(18);
		result.should.equal('eighteen');
	});

	it('should convert 19', () => {
		const result = sut.convert(19);
		result.should.equal('nineteen');
	});

});
