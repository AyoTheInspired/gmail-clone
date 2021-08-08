import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./EmailList";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="app">
			{/* <Navbar /> */}
			<Router>
				<Header />

				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route exact path="/mail" component={Mail} />
						<Route exact path="/" component={EmailList} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
