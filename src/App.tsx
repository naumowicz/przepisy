import AntdCheckbox from './components/AntdCheckbox'
import Header from './components/Header'
import Recipe from './backend/helpers/recipe';


const pascha = '../public/recipes/pascha.json';
const recipe = new Recipe(pascha);



const App = () => {
	return (
		<>
			<Header text={recipe.getName()}/>
			{recipe.getIngredients().forEach(ingredient => {
				<AntdCheckbox text={ingredient} />
			})}			
		</>
	);
}

export default App;
