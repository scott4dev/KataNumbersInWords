'use strict';

const chai = require('chai')
	, should = chai.should();

const convert = require('../src/index');

describe('Not yet supported', () => {
		
	it('should NOT convert -1', () => {
		const result = convert(-1);
		result.should.equal('not yet supported');
	});
});
