const fg = require('fast-glob');
// const fs = require('fs');
const fs = require('fs');
const path = require('path');

const typesOfFood = ['cakes'];

typesOfFood.forEach(type => {
	//getting all files located in directory with name type of food
	const recipesTypeList = fg.sync(`./recipes/${type}/*.json`);
	const url = `https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/${type}/`;
	const data: any = {};

	recipesTypeList.forEach((recipe: string) => {
		//accessing recipe
		const recipeData: {name: string, source: string, rating: number, ingredients: Array<string>, tools: Array<string>, actions: Array<string>} = JSON.parse(fs.readFileSync(recipe).toString());
		//adding to object key and value, key is recipe name, value is url to file on github - main branch
		data[recipeData.name] = `${url}${path.parse(recipe).name}.json`;
	});

	fs.writeFileSync(`./recipes/${typesOfFood}.json`, JSON.stringify(data));
});