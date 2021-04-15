import AntdCheckbox from './components/AntdCheckbox'
import Header from './components/Header'
	import List from './components/List'

const list = [{text: 'a', link: 'a'}, {text: 'b', link: 'b'}, {text: 'c', link: 'c'}];

const App = () => {
	return (
		<>
			<Header text="Lista Przepisów"/>
			{/* <AntdList list={list}/> */}
			{/* {recipe.getIngredients().forEach(ingredient => {
				<AntdCheckbox text={ingredient} />
			})}			 */}
			<List elements={list}/>
		</>
	);
}

export default App;
