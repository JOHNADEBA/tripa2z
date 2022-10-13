require("dotenv").config({path: '../.env'});

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client:process.env.CLIENT,
		connection: {
			database: process.env.DATABASE,
			host: process.env.DB_HOST,
			user: process.env.USER, //i can also use john
			password: process.env.PASSWORD,
			dateStrings: true
		},
		// useNullAsDefault: true,
		// timezone: "UTC",
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	// production: {
	// 	client: "postgresql",
	// 	connection: {
	// 		database: "tripa2z",
	// 		user: "john",
	// 		password: "eVineyard123",
	// 	},
	// 	pool: {
	// 		min: 2,
	// 		max: 10,
	// 	},
	// 	migrations: {
	// 		tableName: "knex_migrations",
	// 	},
	// },
};
