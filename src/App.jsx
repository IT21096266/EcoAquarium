import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Calculator from "./pages/Calculator";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path={`/`} element={<Calculator />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
