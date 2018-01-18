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

function kidToParent({name, parent}){
	var childName = {name: name, children:[]};
	var parentName = {name: parent, children: [childName]};
	parentName.children.push(childName);

	return parentName;
}