import "./App.css";
import Chart from "./components/Chart";
import Api from "./components/Api";
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
		Api.getChartDataApi().then(
			(
				jsonStr
			) => {
				this.setState(
					{
						chartData: jsonStr,
					}
				);
				console.log(
					jsonStr
				);
			}
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>
						Sample
						Web
						Logs
					</h1>
				</header>
				<App>
					<Chart />
				</App>
			</div>
		);
	}
}

export default App;
