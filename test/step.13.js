const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 200 to 999', () => {

	it('should convert 200', () => {
		const result = convert(200);
		result.should.equal('two hundred');
	});

	it('should convert 222', () => {
		const result = convert(222);
		result.should.equal('two hundred and twenty-two');
	});

	it('should convert 257', () => {
		const result = convert(257);
		result.should.equal('two hundred and fifty-seven');
	});

	it('should convert 345', () => {
		const result = convert(345);
		result.should.equal('three hundred and forty-five');
	});

	it('should convert 495', () => {
		const result = convert(495);
		result.should.equal('four hundred and ninety-five');
	});


	it('should convert 519', () => {
		const result = convert(519);
		result.should.equal('five hundred and nineteen');
	});

});
