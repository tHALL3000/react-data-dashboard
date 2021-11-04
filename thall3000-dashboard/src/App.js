import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/Chart";
import { Component } from "react";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={
							logo
						}
						className="App-logo"
						alt="logo"
					/>
					<h1>
						{" "}
						Sample
						Web
						Logs
					</h1>
				</header>
				<Chart />
			</div>
		);
	}
}

export default App;
