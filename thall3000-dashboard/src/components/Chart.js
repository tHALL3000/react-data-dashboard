import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
	constructor({ chartData }, props) {
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
							label: "Bytes Distribution",
							data: {
								chartData,
							},
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

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: "right",
	};

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
						title: {
							display: this
								.props
								.displayTitle,
							text: "This is the title for the graph",
							fontSize: 25,
						},
						legend: {
							display: this
								.props
								.displayLegend,
							position: this
								.props
								.legendPosition,
						},
					}}
				/>
			</div>
		);
	}
}
export default Chart;
