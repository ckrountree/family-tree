# family-tree

Given the following flat list of people, write code that will generate an array of people with their children as properties of themselves.
	Example output format: 
		[{ name: ‘Sue’, children: [{ name: 'John', children:[] }, { name: 'Garth', children: [] }]}, {<another person>}]
	
	Dataset:
		var people=[
			{ name: 'John', parent: 'Sue' },
			{ name: 'Jack', parent: 'Steve' },
			{ name: 'Jill', parent: 'Sally' },
			{ name: 'Wayne', parent: 'Jack' },
			{ name: 'Twinkle', parent: 'Jack' },
			{ name: 'Garth', parent: 'Sue' },
			{ name: 'Steve', parent: 'Alejandro' },
			{ name: 'Peter', parent: 'Alejandro' },
		];	
