const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

const typesOfFood = ['cakes', 'desserts','meals'];

typesOfFood.forEach(type => {
	//getting all files located in directory with name type of food
	const recipesTypeList = fg.sync(`./recipes/${type}/*.json`);
	const url = `https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/${type}/`;
	const data = {};

	recipesTypeList.forEach((recipe) => {
		//accessing recipe
		const recipeData = JSON.parse(fs.readFileSync(recipe).toString());
		//adding to object key and value, key is recipe name, value is url to file on github - main branch
		data[recipeData.name] = `${url}${path.parse(recipe).name}.json`;
	});

	fs.writeFileSync(`./recipes/${type}.json`, JSON.stringify(data));
});
