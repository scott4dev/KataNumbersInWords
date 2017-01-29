const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Convert from 20 to 29', () => {

	it('should convert 20', () => {
		const result = convert(20);
		result.should.equal('twenty');
	});

	it('should convert 21', () => {
		const result = convert(21);
		result.should.equal('twenty-one');
	});

	it('should convert 22', () => {
		const result = convert(22);
		result.should.equal('twenty-two');
	});

	it('should convert 23', () => {
		const result = convert(23);
		result.should.equal('twenty-three');
	});

	it('should convert 24', () => {
		const result = convert(24);
		result.should.equal('twenty-four');
	});

	it('should convert 25', () => {
		const result = convert(25);
		result.should.equal('twenty-five');
	});

	it('should convert 26', () => {
		const result = convert(26);
		result.should.equal('twenty-six');
	});

	it('should convert 27', () => {
		const result = convert(27);
		result.should.equal('twenty-seven');
	});

	it('should convert 28', () => {
		const result = convert(28);
		result.should.equal('twenty-eight');
	});

	it('should convert 29', () => {
		const result = convert(29);
		result.should.equal('twenty-nine');
	});

});
