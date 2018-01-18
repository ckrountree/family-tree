const chai = require('chai');
const assert = chai.assert;

describe('Array', function() {
	it('should start with an empty array', function() {
		const accum = [];
		assert.equal(accum.length, 0);
	});
});
