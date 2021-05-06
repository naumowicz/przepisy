import 'antd/dist/antd.css';
import '../index.css';
import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const cakesList = 'https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/cakes.json'

const RecipesList = () => {
	let cakesListElements: Array<string> = [];

	const [recipes, setRecipes] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError]= useState(false);

	useEffect(() => {
		getRecipesLinks();
	}, [])

	const getRecipesLinks = async () => {
		fetch(cakesList)
		.then(async (cakesLinks) => {
			setIsLoading(false);			
			cakesListElements = Object.keys(await cakesLinks.json());
			setRecipes(cakesListElements);
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
							<Link to={{pathname: recipeName}}>{recipeName}</Link>
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
