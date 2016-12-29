const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Converterl', () => {

	it('should convert 0', () => {
		const sut = new Converter();
		const result = sut.convert(0);
		result.should.equal('zero');
	});

	it('should convert 1', () => {
		const sut = new Converter();
		const result = sut.convert(1);
		result.should.equal('one');
	});

	it('should convert 2', () => {
		const sut = new Converter();
		const result = sut.convert(2);
		result.should.equal('two');
	});

});
