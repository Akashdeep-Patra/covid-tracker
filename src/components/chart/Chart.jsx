import React from "react";
import {
	ResponsiveContainer,
	CartesianGrid,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	XAxis,
	BarChart
} from "recharts";
import "./Chart.scss";

export default ({ data: { deaths, confirmed, recovered, state } }) => {
	const data = [
		{
			state: state,
			confirmed: confirmed,
			recovered: recovered,
			deaths: deaths
		}
	];
	return (
		<div className="chart-container">
			<ResponsiveContainer width="80%" height={250}>
				<BarChart barSize={50} barGap={20} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="state" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="confirmed" fill="#6560ca" />
					<Bar dataKey="recovered" fill="#46ce7a" />
					<Bar dataKey="deaths" fill="#e63d3d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
