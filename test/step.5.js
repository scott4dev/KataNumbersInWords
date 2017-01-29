const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 30 to 39', () => {


	it('should convert 30', () => {
		const result = convert(30);
		result.should.equal('thirty');
	});

	it('should convert 31', () => {
		const result = convert(31);
		result.should.equal('thirty-one');
	});
	
	it('should convert 39', () => {
		const result = convert(39);
		result.should.equal('thirty-nine');
	});

});
