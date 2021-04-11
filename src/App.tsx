import AntdCheckbox from './components/AntdCheckbox'
import Header from './components/Header'


const App = () => {
	return (
		<>
			<Header text={recipe.getName()}/>
			{/* {recipe.getIngredients().forEach(ingredient => {
				<AntdCheckbox text={ingredient} />
			})}			 */}
		</>
	);
}

export default App;
