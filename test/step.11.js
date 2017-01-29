const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 90 to 99', () => {
	
	it('should convert 90', () => {
		const result = convert(90);
		result.should.equal('ninety');
	});
	
	it('should convert 92', () => {
		const result = convert(92);
		result.should.equal('ninety-two');
	});
		
	it('should convert 97', () => {
		const result = convert(97);
		result.should.equal('ninety-seven');
	});

});
