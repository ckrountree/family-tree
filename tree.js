var people = [
	{ name: 'John', parent: 'Sue' },
	{ name: 'Jack', parent: 'Steve' },
	{ name: 'Jill', parent: 'Sally' },
	{ name: 'Wayne', parent: 'Jack' },
	{ name: 'Twinkle', parent: 'Jack' },
	{ name: 'Garth', parent: 'Sue' },
	{ name: 'Steve', parent: 'Alejandro' },
	{ name: 'Peter', parent: 'Alejandro' }
];

const treeArr = people.reduce((accum, {name, parent}) => {
	function match(parentObj) {
		parentObj.name === parent;
	}

	const childName = {name: name, children: []};
	const parentName = {name: parent, children: [childName]};

	if(accum.length === 0) accum.push(parentName);
	else if(accum.findIndex(match) !== -1) accum[accum.findIndex(match)].children.push(parentName);
	// else (accum.findIndex(match) === -1) accum[accum.findIndex(match)].push(parentName);
	
	return accum;
}, []);
console.log(treeArr);