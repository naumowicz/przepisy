import 'antd/dist/antd.css';
import './index.css';
// import { Checkbox } from 'antd';
// import Checkbox from './components/checkbox'
import Header from './components/Header';
import React from 'react';

// function onChange(e) {
	// console.log('magic!');
// }

const tasks = ['Pokrój', 'Ugotuj', 'Posprzątaj'];

const App = () => {
	render() {
		return (
			<Header />
		)
	}
}

export default App;
