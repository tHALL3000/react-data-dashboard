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
		let highTemp =
			[];
		let lowTemp =
			[];
		axios.get(
			"http://api.weatherapi.com/v1/forecast.json?key=6e042cb5abbb459d843173749210811&q=London&days=7&aqi=no&alerts=no"
		).then(
			(
				res
			) => {
				console.log(
					res
				);
				for (const dataObj = res.data.forcast.forcastday.day) {
					highTemp.push(
						dataObj.maxtemp_f
					);
					lowTemp.push(
						dataObj.mintemp_f
					);
				}
			}
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
