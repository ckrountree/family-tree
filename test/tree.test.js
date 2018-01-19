const chai = require('chai');
const assert = chai.assert;

describe('Array', () => {
	it('should start with an empty array', () => {
		const accum = [];
		assert.equal(accum.length, 0);
	});

	it('should add a key:value object if array is empty', () => {
		const people = [
			{ name: 'John', parent: 'Sue' }
		];
		const parentName = {name: parent, children: []};

		people.reduce((accum, {name, parent}) => {
			if(accum.length === 0) accum.push(parentName);
		},
		assert.equal(accum.length === 0, { name: 'John', parent: 'Sue' });
	});

	// it('should check that parent name is in array', () => {

	// });

	// it('should check that parent name is not in array', () => {

	// });
});
