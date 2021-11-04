import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
	constructor(props) {
		super(
			props
		);
		this.state =
			{
				chartData: {
					labels: [
						0,
						1000,
						2000,
						3000,
						4000,
						5000,
					],
					datasets: [
						{
							labels: "Bytes Distribution",
							data: [
								2044,
								1980,
								3489,
								4400,
							],
							backgroundColor: [
								"rgba(214, 149, 239, 0.7)",
								"rgba(255, 124, 216, 0.7)",
								"rgba(255, 66, 193, 0.7)",
								"rgba(102, 150, 253, 0.7)",
								"rgba(107, 65, 232, 0.7)",
							],
						},
					],
				},
			};
	}
	render() {
		return (
			<div className="chart">
				<Bar
					data={
						this
							.state
							.chartData
					}
					options={{
						maintainAspectRatio: false,
					}}
				/>
			</div>
		);
	}
}
export default Chart;
