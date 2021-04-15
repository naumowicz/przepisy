import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Recipe from './Recipe'

const List = ({elements}: {elements: Array<{text: string; link: string}>}) => {
	return (
		
		<div className="list">
			<Router>
				<ul>
					{elements.map(element => {
						return (
							<li>
								<Link key="element" to={element.link}>{element.text}</Link>
							</li>
						)
					})}
				</ul>
				<Switch>
					<Route path="/">
						{/* <App /> */}
					</Route>	
					<Route>
						{elements.map(element => {
							return (
								<Recipe name={element.text} />
							)
						})}						
					</Route>
					<Route></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default List;
