import Header from './components/Header'
import RecipesTypes from './components/RecipesTypes'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Recipe from './components/Recipe';

const App = () => {
	return (
		<>
			<Header text="Lista przepisów"/>
			<Router>
				<Switch>
					<Route exact path='/'>
						<RecipesTypes />
					</Route>
					<Route exact path='/przepisy'>
						<RecipesTypes />
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
