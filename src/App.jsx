import React from "react";
import { getStatesData, getTotalData } from "./api/api";
import { Cards, Chart, StatePicker } from "./components";
import style from "./App.module.scss";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			deaths: 0,
			confirmed: 0,
			recovered: 0,
			state: "",
			picker: {}
		};
	}
	handleChange = (value) => {
		// console.log(value);
		const { deaths, confirmed, recovered, state } = this.state.picker[value];
		this.setState({ deaths, confirmed, recovered, state });
	};
	async componentDidMount() {
		const { deaths, confirmed, state, recovered } = await getTotalData();
		const picker = await getStatesData();
		picker[state] = { deaths, confirmed, recovered };
		this.setState({ deaths, confirmed, state, recovered, picker });
	}
	render() {
		const { deaths, confirmed, recovered, state } = this.state;
		return (
			<div className={style.container}>
				<Chart data={{ deaths, confirmed, recovered, state }} />
				<StatePicker handleChange={this.handleChange} />
				<Cards data={{ deaths, confirmed, recovered }} />
			</div>
		);
	}
}
