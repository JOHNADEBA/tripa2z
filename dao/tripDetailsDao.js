const db = require("../db/db");

const addTrip = async (
	name,
	start_city,
	end_city,
	date_time,
	car_type,
	passenger_amount,
	passenger_insurance,
	price,
	phone,
	decription
) => {
	const [id] = await db("tripa2zusers")
		.insert({
			name,
			start_city,
			end_city,
			date_time,
			car_type,
			passenger_amount,
			passenger_insurance,
			price,
			phone,
			decription,
		})
		.returning("id");
	return id;
};

const getAllTrips = (start_city, end_city, date_time) => {
	knex("users")
		.where({
			start_city,
			end_city,
			date_time,
		})
		.select('*');
};

module.export = { addTrip, getAllTrips };
