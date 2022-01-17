import RecipesList from './RecipesList';

const typesOfRecipes = ['cakes', 'desserts', 'meals'];
const translation = ['Ciasta', 'Desery', 'Posiłki'];

const RecipesTypes = () => {
	return (
		<div>
			{typesOfRecipes.map((type, index) => {
				return (
					<div>
						<h2>{translation[index]}</h2>
						<RecipesList recipeType={type} />
					</div>
				)
			})}
		</div>
	)
}

export default RecipesTypes;