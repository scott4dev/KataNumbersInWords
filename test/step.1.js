'use strict';

const chai = require('chai')
	, should = chai.should();

const Converter = require('../src/index');

describe('Convert from 0 to 10', () => {

	const sut = new Converter();
		
	it('should convert 0', () => {
		const result = sut.convert(0);
		result.should.equal('zero');
	});

	it('should convert 1', () => {
		const result = sut.convert(1);
		result.should.equal('one');
	});

	it('should convert 2', () => {
		const result = sut.convert(2);
		result.should.equal('two');
	});

	it('should convert 3', () => {
		const result = sut.convert(3);
		result.should.equal('three');
	});

	it('should convert 4', () => {
		const result = sut.convert(4);
		result.should.equal('four');
	});

	it('should convert 5', () => {
		const result = sut.convert(5);
		result.should.equal('five');
	});

	it('should convert 6', () => {
		const result = sut.convert(6);
		result.should.equal('six');
	});

	it('should convert 7', () => {
		const result = sut.convert(7);
		result.should.equal('seven');
	});

	it('should convert 8', () => {
		const result = sut.convert(8);
		result.should.equal('eight');
	});

	it('should convert 9', () => {
		const result = sut.convert(9);
		result.should.equal('nine');
	});

});
