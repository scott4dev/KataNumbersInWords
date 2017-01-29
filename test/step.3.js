const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 14 to 19', () => {

	it('should convert 13', () => {
		const result = convert(13);
		result.should.equal('thirteen');
	});

	it('should convert 14', () => {
		const result = convert(14);
		result.should.equal('fourteen');
	});

	it('should convert 15', () => {
		const result = convert(15);
		result.should.equal('fifteen');
	});

	it('should convert 16', () => {
		const result = convert(16);
		result.should.equal('sixteen');
	});

	it('should convert 17', () => {
		const result = convert(17);
		result.should.equal('seventeen');
	});

	it('should convert 18', () => {
		const result = convert(18);
		result.should.equal('eighteen');
	});

	it('should convert 19', () => {
		const result = convert(19);
		result.should.equal('nineteen');
	});

});
