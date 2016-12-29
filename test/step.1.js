const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Converterl', () => {

	it('should convert 1', () => {
		const sut = new Converter();
		const result = sut.convert(1);
		result.should.equal('one');
	});

});
