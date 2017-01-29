const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 20 to 29', () => {
	
	const sut = new Converter();

	it('should convert 20', () => {
		const result = sut.convert(20);
		result.should.equal('twenty');
	});

	it('should convert 21', () => {
		const result = sut.convert(21);
		result.should.equal('twenty-one');
	});

	it('should convert 22', () => {
		const result = sut.convert(22);
		result.should.equal('twenty-two');
	});

	it('should convert 23', () => {
		const result = sut.convert(23);
		result.should.equal('twenty-three');
	});

	it('should convert 24', () => {
		const result = sut.convert(24);
		result.should.equal('twenty-four');
	});

	it('should convert 25', () => {
		const result = sut.convert(25);
		result.should.equal('twenty-five');
	});

	it('should convert 26', () => {
		const result = sut.convert(26);
		result.should.equal('twenty-six');
	});

	it('should convert 27', () => {
		const result = sut.convert(27);
		result.should.equal('twenty-seven');
	});

	it('should convert 28', () => {
		const result = sut.convert(28);
		result.should.equal('twenty-eight');
	});

	it('should convert 29', () => {
		const result = sut.convert(29);
		result.should.equal('twenty-nine');
	});

});
