const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 70 to 79', () => {

	it('should convert 70', () => {
		const result = convert(70);
		result.should.equal('seventy');
	});

	it('should convert 73', () => {
		const result = convert(73);
		result.should.equal('seventy-three');
	});
	
	it('should convert 77', () => {
		const result = convert(77);
		result.should.equal('seventy-seven');
	});

});
