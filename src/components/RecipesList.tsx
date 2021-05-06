import 'antd/dist/antd.css';
import '../index.css';
import { List } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

let placeholder = ['Pascha - Makłowicz', 'b', 'c'];

const RecipesList = () => {
	const [recipes, setRecipes] = useState([<></>]);
	const createMenu = () => {
		const links = placeholder.map(element => {
			return (
				<Link to={{pathname: element}}>{element}</Link>
			)
		})
		setRecipes(links);
	}

	useEffect(() => {
		createMenu();
	}, [])
	
	return (
		<div>
			<List
			bordered
			dataSource={recipes}
			renderItem={item => (
				<List.Item>
				{item}
				</List.Item>
			)}
			/>
		</div>
	)
}

export default RecipesList;
