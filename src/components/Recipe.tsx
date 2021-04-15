import RecipeInterface from '../interfaces/recipeInterface'

const getRecipe = (name: string): RecipeInterface => {
	let recipe = {name: '', source: '', ingredients: [''], tools: [''], actions: ['']};
	fetch('')//fixme
	.then(res => res.json().then(data => {
		recipe = data;
	}))
	return recipe;
}

const Recipe = ({name}: {name: string}) => {
	
	const recipe = getRecipe(name)

	return (
		<div>
			<div>
				<h1>{recipe.name}</h1>
			</div>
			<div>
				<a href={recipe.source}>{recipe.source}</a>
			</div>
			<div>
				<ul>
					{recipe.ingredients.map(ingredient => {
					return <li>{ingredient}</li>
					})}
				</ul>
			</div>
			<div>
				<ul>
					{recipe.tools.map(tool => {
						return <li>{tool}</li>
						})}
				</ul>
			</div>
			<div>
				<ul>
					{recipe.actions.map(action => {
						return <li>{action}</li>
						})}
				</ul>
			</div>
		</div>
	)
}

export default Recipe;
