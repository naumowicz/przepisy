import 'antd/dist/antd.css';
import '../index.css';
import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const linkToRecipesList = ['https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/', '.json'];

const RecipesList = ({recipeType}: {recipeType: string}) => {
	let elementsOfRecipesList: Array<string> = [];

	const [recipes, setRecipes] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError]= useState(false);

	useEffect(() => {
		getRecipesLinks();
	}, [])

	const getRecipesLinks = async () => {
		fetch(`${linkToRecipesList[0]}${recipeType}${linkToRecipesList[1]}`)
		.then(async (cakesLinks) => {
			setIsLoading(false);			
			elementsOfRecipesList = Object.keys(await cakesLinks.json());
			setRecipes(elementsOfRecipesList);
		})
		.catch(error => {
			setIsError(true);
			console.log(error)
		})
	}

	switch (true) {
		case isLoading:
				return (
					<div>
						<h1>Ładowanie</h1>
					</div>
				)
			case isError:
				return (
					<div>
						<h1>Błąd!</h1>
					</div>
				)
		default:
			return (
				<div>
					<List
					bordered
					dataSource={recipes.map((recipeName) => {
						return (
							<Link to={{pathname: `#${recipeType}+${recipeName}`}}>{recipeName}</Link>
						)
					})}
					renderItem={item => (
						<List.Item>
						{item}
						</List.Item>
					)}
					/>
				</div>
			)
	}
}

export default RecipesList;
