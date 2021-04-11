import AntdCheckbox from './components/AntdCheckbox'
import Header from './components/Header'
import AntdList from './components/AntdList';

const list = ['a', 'b', 'c'];

const App = () => {
	return (
		<>
			<Header text="Lista Przepisów"/>
			<AntdList list={list}/>
			{/* {recipe.getIngredients().forEach(ingredient => {
				<AntdCheckbox text={ingredient} />
			})}			 */}
		</>
	);
}

export default App;
