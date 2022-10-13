const {
	addTripModel,
	getAllTripsModel,
	deleteOldTrips,
	getAllTodaysTripsModel,
} = require("../Models/indexModel");

setInterval(() => {
	try {
		deleteOldTrips();
	} catch (error) {
		console.log(error);
	}
}, 5000);

const getAllTodaysTrips = async (req, res) => {
	try {
		const data = await getAllTodaysTripsModel();
		res
			.status(200)
			.json(data.length === 0 ? { mgs: "No Trips Found For Today" } : data);
	} catch (error) {
		res.status(500).json("Wrong input");
	}
};

const getAllTrips = async (req, res) => {
	const { start_city, end_city, date, trip_type } = req.params;

	try {
		const data = await getAllTripsModel(
			start_city.toLowerCase(),
			end_city.toLowerCase(),
			date,
			trip_type.toLowerCase()
		);
		res.status(200).json(data.length === 0 ? { mgs: "No result found" } : data);
	} catch (error) {
		res.status(500).json("Wrong input");
	}
};

const addTrip = async (req, res) => {
	try {
		const id = await addTripModel(req.body);
		res.status(200).json({mgs:"Successful"});
	} catch (error) {
		res.status(500).json({mgs:"Wrong input"});
	}
};

module.exports = { getAllTrips, addTrip, getAllTodaysTrips };
