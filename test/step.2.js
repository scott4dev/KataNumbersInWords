const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Converter', () => {

	it('should convert 10', () => {
		const sut = new Converter();
		const result = sut.convert(10);
		result.should.equal('ten');
	});

	it('should convert 11', () => {
		const sut = new Converter();
		const result = sut.convert(11);
		result.should.equal('eleven');
	});

	it('should convert 12', () => {
		const sut = new Converter();
		const result = sut.convert(12);
		result.should.equal('twelve');
	});

});
