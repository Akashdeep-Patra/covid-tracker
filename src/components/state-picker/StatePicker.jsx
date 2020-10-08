import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import Select from "react-select";
import "./StatePicker.scss";
import { getStatesData } from "../../api/api";
export default class StatePicker extends React.Component {
	constructor() {
		super();
		this.state = { picker: {} };
	}
	async componentDidMount() {
		const picker = await getStatesData();
		this.setState({ picker });
	}
	render() {
		const { picker } = this.state;
		const options = Object.keys(picker).map((value) => ({
			value: value,
			label: value
		}));

		return <Select options={options} />;
	}
}
