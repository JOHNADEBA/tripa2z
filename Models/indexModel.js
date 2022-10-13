const db = require("../db/db");

const addTripModel = async (sendToDB) => {
	const {
		name,
		original_start_city,
		original_end_city,
		start_city,
		end_city,
		start_country,
		end_country,
		date,
		time,
		car_type,
		trip_type,
		passenger_amount,
		passenger_insurance,
		price,
		phone,
		description,
		contact_phone,
		contact_text,
		stops,
		terms,
	} = sendToDB;

	const [id] = await db("tripa2zusers")
		.insert({
			name,
			original_start_city,
			original_end_city,
			start_city: start_city.toLowerCase(),
			end_city: end_city.toLowerCase(),
			start_country,
			end_country,
			date,
			time,
			car_type,
			trip_type,
			passenger_amount,
			passenger_insurance:
				passenger_insurance === "" ? false : passenger_insurance,
			price,
			phone,
			description,
			contact_phone: contact_phone === "" ? false : contact_phone,
			contact_text: contact_text === "" ? false : contact_text,
			stops: stops === "" ? false : stops,
			terms,
		})
		.returning("id");
	return id;
};

const getAllTripsModel = async (start_city, end_city, date, trip_type) => {
	console.log(start_city, end_city, date, trip_type);
	const data = await db("tripa2zusers")
		.where(function () {
			this.where({ start_city, end_city }).orWhere("start_city", start_city);
		})
		.andWhere({ date, trip_type })
		.select();
	return data;
};

const convertDate = (str) => {
	var date = new Date(str),
		mnth = ("0" + (date.getMonth() + 1)).slice(-2),
		day = ("0" + date.getDate()).slice(-2);
	return [date.getFullYear(), mnth, day].join("-");
};

const getAllTodaysTripsModel = async () => {
	const currentDate = convertDate(new Date());
	console.log(currentDate);
	const data = await db("tripa2zusers").where("date", currentDate).select();
	return data;
};

const deleteOldTrips = async () => {
	const currentDate = new Date().toJSON().slice(0, 10);

	if (
		new Date().toLocaleTimeString() === "00:00:00" ||
		new Date().toLocaleTimeString() === "00:00:10"
	) {
		const id = await db("tripa2zusers")
			.where("created_at", "<=", currentDate)
			.del();
		return id;
	}
};

module.exports = {
	addTripModel,
	getAllTripsModel,
	deleteOldTrips,
	getAllTodaysTripsModel,
};
