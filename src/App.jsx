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
			state: ""
		};
	}

	async componentDidMount() {
		const { deaths, confirmed, state, recovered } = await getTotalData();
		this.setState({ deaths, confirmed, state, recovered });
	}
	render() {
		const { deaths, confirmed, recovered } = this.state;
		return (
			<div className={style.container}>
				<StatePicker />
				<Cards data={{ deaths, confirmed, recovered }} />
			</div>
		);
	}
}
