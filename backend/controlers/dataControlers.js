import DataModel from '../models/DataModel.js';
import august from '../mock/august.js';
import september from '../mock/september.js';

export const getData = async (req, res) => {
	try {
		const data = await DataModel.find();
		const mock = [august, september];
		res.status(200).send([
			{
				data: data
			},
			{
				mock: mock
			}
		])
	} catch (err) {
		return res.status(404).json(err.message);
	};
};

export const postData = async (req, res) => {
	const data = req.body;

	if (!data) {
		return res.status(400).send('there are no data to work with!');
	};

	const { formattedData } = data;
	const { user } = data;

	if (!formattedData || !user) {
		return res.status(400).send('something went wrong, please try again later');
	};

	//the minimum required length for the array is 17 as that much data we need in order to present them properly
	if (formattedData < 17) {
		return res.status(400).send('the data are not in a correct format');
	};

	const thisDate = getThisDate();

	const newData = await new DataModel({
		date: thisDate,
		postedBy: user.email,
		productsByValue: {
			names: formattedData[1],
			values: formattedData[2]
		},
		productsByQuantity: {
			names: formattedData[3],
			values: formattedData[4]
		},
		categoriesByValue: {
			names: formattedData[5],
			values: formattedData[6]
		},
		categoriesByQuantity: {
			names: formattedData[7],
			values: formattedData[8]
		},
		dataComparison: {
			currentYearData: formattedData[9],
			lastYearData: formattedData[10]
		},
		customersData: {
			age: [
				{
					categories: ["18-24", "25-34", "35-44", "45-54", "54-64", "65+"],
					values: formattedData[11]
				}
			],
			sex: [
				{
					categories: ["male", "female"],
					values: formattedData[12]
				}
			],
			device: [
				{
					categories: ["Mobile", "Desktop", "Tablet"],
					values: formattedData[13]
				}
			],
		},
		marketingChannels: {
			transactions: formattedData[14],
			sales: formattedData[15],
			visits: formattedData[16]
		}
	});

	try {
		// Check if data for this month do not already exist, there should be only one document per each month of the year
		const dataAlreadyExists = await DataModel.findOne({
			date: thisDate
		});

		if (dataAlreadyExists) {
			return res.status(400).send('There are data for this month already');
		};

		const savedData = await newData.save();
		if (!savedData) {
			return res.status(400).send('something went wrong, please try again later')
		};

		res.status(201).send(newData);
	} catch (err) {
		res.status(401).json(err.message);
	};
};

export const deleteData = async (req, res) => {
	const { id } = req.params;
	try {
		await DataModel.findByIdAndRemove(id)
	} catch (err) {
		return res.status(404).json(err.message);
	};
};


const getThisDate = () => {
	const date = new Date();
	const months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
	const month = date.getMonth();
	const year = date.getUTCFullYear()

	const thisDate = `${year} ${months[month]} `

	return thisDate
}