import axios from "axios";
const urlStates = "https://api.covidindiatracker.com/state_data.json";
const urlTotal = "https://api.covidindiatracker.com/total.json";

export const getTotalData = async () => {
	const data = await axios.get(urlTotal);
	return data.data;
};

export const getStatesData = async () => {
	const { data } = await axios.get(urlStates);
	const result = {};
	data.forEach((obj) => {
		result[obj.state] = obj;
	});
	return result;
};
