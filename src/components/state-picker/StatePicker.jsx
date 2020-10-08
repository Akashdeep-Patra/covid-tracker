import React from "react";
import Select from "react-select";
import "./StatePicker.scss";
import { getTotalData, getStatesData } from "../../api/api";
export default class StatePicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = { picker: {} };
	}
	async componentDidMount() {
		const { state, deaths, recovered, confirmed } = await getTotalData();
		const picker = await getStatesData();
		picker[state] = { deaths, confirmed, recovered };
		this.setState({ picker: picker });
	}
	render() {
		const { picker } = this.state;
		const options = Object.keys(picker).map((value) => ({
			value: value,
			label: value
		}));

		return (
			<Select
				className="select-container"
				defaultValue={{ value: picker["Total"], label: "Total" }}
				onChange={(e) => {
					const { handleChange } = this.props;
					handleChange(e.value);
				}}
				options={options}
			/>
		);
	}
}
