const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 10 to 13', () => {
	
	const sut = new Converter();

	it('should convert 10', () => {
		const result = sut.convert(10);
		result.should.equal('ten');
	});
	
	it('should convert 11', () => {
		const result = sut.convert(11);
		result.should.equal('eleven');
	});

	it('should convert 12', () => {
		const result = sut.convert(12);
		result.should.equal('twelve');
	});

});
