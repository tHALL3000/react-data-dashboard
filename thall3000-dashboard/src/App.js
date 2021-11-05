import "./App.css";
import Chart from "./components/Chart";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state =
			{
				chartData: {},
			};
	}

	componentDidMount() {
		this.getChartData();
	}

	getChartData() {
		//api call here
		this.setState(
			{
				//	chartData,
			}
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>
						{/* {" "} */}
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
