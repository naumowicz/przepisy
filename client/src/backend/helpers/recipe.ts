import recipeInterface from '../interfaces/recipe';
import fileSystem from './fileSystem';

class Recipe {
	recipe: recipeInterface;

	constructor(name: string) {
		this.recipe = fileSystem.readRecipe(name);
	}

	getName(): string {
		return this.recipe.name;
	}

	getSource(): string {
		return this.recipe.source;
	}

	getIngredients(): Array<string> {
		return this.recipe.ingredients;
	}

	getTools(): Array<string> {
		return this.recipe.tools;
	}

	getActions(): Array<string> {
		return this.recipe.actions;
	}
}

export default Recipe;