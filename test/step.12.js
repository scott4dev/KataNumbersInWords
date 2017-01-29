const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 100 to 199', () => {

	it('should convert 100', () => {
		const sut = new Converter();
		const result = sut.convert(100);
		result.should.equal('one hundred');
	});

	it('should convert 102', () => {
		const sut = new Converter();
		const result = sut.convert(102);
		result.should.equal('one hundred and two');
	});
	
	it('should convert 107', () => {
		const sut = new Converter();
		const result = sut.convert(107);
		result.should.equal('one hundred and seven');
	});

});
