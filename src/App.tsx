import Header from './components/Header'
import List from './components/RecipesList'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Recipe from './components/Recipe';

const App = () => {
	return (
		<>
			<Header text="Lista Przepisów"/>
			<Router>
				<Switch>
					<Route exact path='/'>
						<List />
					</Route>
					<Route exact path='/przepisy'>
						<List />
					</Route>
					<Route path="/*">
						<Recipe />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
