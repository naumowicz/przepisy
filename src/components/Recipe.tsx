import { useEffect, useState } from 'react';
import RecipeInterface from '../interfaces/recipeInterface';
import { useLocation, Link } from 'react-router-dom';
import { Button, Collapse, Rate, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import {InfoCircleTwoTone} from '@ant-design/icons'
import CheckboxList from './CheckboxList';

const { Panel } = Collapse;

const cakesUrl = `https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/cakes.json`;

const rating = ['nijakie 😕', 'zwykłe 🙄', 'smaczne 👍', 'dobre 😃', 'Glamour! 😊'];

const tooltip = 'Oceny wystawiane są surowo. 5 gwiazdek oznacza przepis za milion dolarów, natomiast 2 gwiazdki (zwykłe) można oceniać tak jak schabowe na obiad.'

const ratingPlaceholder = 2;

const Recipe = () => {
	let location = decodeURI(useLocation().pathname).replace('/przepisy/', '').replace('/', '');

	const [recipe, setRecipe] = useState<RecipeInterface>({name: '', source: '', rating: 2, ingredients: [''], tools: [''], actions: ['']});

	const getRecipe = async () => {
		const response = await fetch(cakesUrl);
		const cakesList = await response.json();
		Object.keys(cakesList).forEach(async cake => {
			if (cake === location) {
				const response = await fetch(cakesList[cake]);
				setRecipe(await response.json());
			}
		});		
	}

	useEffect(() => {
		getRecipe();
	}, []);
	
	return (
		<div className="recipe">
			<Link to='/'>
				<Button size="large" block>Powrót</Button>
			</Link>
			<div>
				<h1>{recipe.name}</h1>
			</div>
			<div>
				<h3>Źródło:</h3>
				<a href={recipe.source} target="_blank" rel="noreferrer">{recipe.source}</a>
			</div>
			<div>
				<h3>Ocena</h3>
				<span>
					<Rate tooltips={rating} disabled value={recipe.rating} />
					{recipe.rating ? <span className="ant-rate-text">{rating[recipe.rating - 1]}</span> : <span className="ant-rate-text">{rating[ratingPlaceholder - 1]}</span>}
					<span>
						<Tooltip
						title={tooltip}
						>
							<InfoCircleTwoTone />
						</Tooltip>
					</span>
				</span>
			</div>
			<Collapse defaultActiveKey={["1", "2", "3"]}>
				<Panel header="Składniki" key="1">
					<CheckboxList data={recipe.ingredients}></CheckboxList>
				</Panel>
				<Panel header="Narzędzia" key="2">
					<CheckboxList data={recipe.tools}></CheckboxList>
				</Panel>
				<Panel header="Przepis" key="3">
					<CheckboxList data={recipe.actions}></CheckboxList>
				</Panel>
			</Collapse>
		</div>
	)
	
}

export default Recipe;
