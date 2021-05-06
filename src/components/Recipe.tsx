import React, { useEffect, useState } from 'react';
import RecipeInterface from '../interfaces/recipeInterface'

const url = `https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/pascha.json`;

const Recipe = () => {

	const [recipe, setRecipe] = useState<RecipeInterface>({name: '', source: '', ingredients: [''], tools: [''], actions: ['']});

	const getRecipe = async () => {
		const response = await fetch(url);
		const recipe = await response.json();
		setRecipe(recipe);
	}

	useEffect(() => {
		getRecipe();
	}, []);
	
	return (
		<div className="recipe">
			<div>
				<h1>{recipe.name}</h1>
			</div>
			<div>
				<h3>Źródło:</h3>
				<a href={recipe.source} target="_blank" rel="noreferrer">{recipe.source}</a>
			</div>
			<div>
				<h3>Składniki:</h3>
				<ul>
					{recipe.ingredients.map((ingredient, index) => {
					return <li key={index}>{ingredient}</li>
					})}
				</ul>
			</div>
			<div>
				<h3>Narzędzia:</h3>
				<ul>
					{recipe.tools.map((tool, index) => {
						return <li key={index}>{tool}</li>
						})}
				</ul>
			</div>
			<div>
				<h3>Przepis:</h3>
				<ul>
					{recipe.actions.map((action, index) => {
						return <li key={index}>{action}</li>
						})}
				</ul>
			</div>
		</div>
	)
	
}

export default Recipe;
