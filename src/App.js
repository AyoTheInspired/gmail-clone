import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./EmailList";
import Navbar from "./Navbar";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

	const user = useSelector(selectUser);

	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="app">
					{/* <Navbar /> */}
					<Header />

					<div className="app__body">
						<Sidebar />
						<Switch>
							<Route exact path="/mail" component={Mail} />
							<Route exact path="/" component={EmailList} />
						</Switch>
					</div>

					{sendMessageIsOpen && <SendMail />}
				</div>
			)}
		</Router>
	);
}

export default App;
