import "./App.css";
import Chart from "./components/Chart";
import { Component } from "react";
import axios from "axios";

class App extends Component {
	constructor(props) {
		super(
			props
		);
		this.state =
			{
				chartData: {},
			};
	}

	componentDidMount() {
		console.log(
			this
				.getChartData
		);
		this.getChartData();
	}

	getChartData() {
		axios.get(
			"https://jsonplaceholder.typicode.com/todos/1"
		).then(
			(
				response
			) =>
				console.log(
					response
				)
		);

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
