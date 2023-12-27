// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import DragonList from './Component/DragonList';
// import SelectedDragon from './Component/SelectedDragon';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dragon from "./Pages/Dragon";
import Mission from "./Pages/Mission";
import MyProfile from "./Pages/MyProfile";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' Component={Dragon}></Route>
					<Route exact path='/Mission' Component={Mission}></Route>
					<Route exact path='/MyProfile' Component={MyProfile}></Route>
				</Routes>
			</BrowserRouter>

			{/* <Provider store={store}>
				<div>
					<h1>Dragon Space Mission App</h1>
					<DragonList />
					<SelectedDragon />
				</div>
			</Provider> */}

		</>
	);
}

export default App;