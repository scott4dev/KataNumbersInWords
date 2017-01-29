const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 60 to 69', () => {

	it('should convert 60', () => {
		const result = convert(60);
		result.should.equal('sixty');
	});

	it('should convert 63', () => {
		const result = convert(63);
		result.should.equal('sixty-three');
	});
	
	it('should convert 67', () => {
		const result = convert(67);
		result.should.equal('sixty-seven');
	});

});
