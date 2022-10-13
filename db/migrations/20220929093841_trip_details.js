/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("tripa2zusers", (table) => {
		table.increments("id");
		table.string("name", 255).notNullable();
		table.string("original_start_city", 255).notNullable();
		table.string("original_end_city", 255).notNullable();
		table.string("start_city", 255).notNullable();
		table.string("end_city", 255).notNullable();
		table.string("start_country", 255).notNullable();
		table.string("end_country", 255).notNullable();
		table.date("date").notNullable();
		table.time("time").notNullable();
		table.string("car_type", 255).notNullable();
		table.string("trip_type", 255).notNullable();
		table.string("passenger_amount", 255).notNullable();
		table.boolean("passenger_insurance"); //
		table.decimal("price").notNullable();
		table.string("phone", 255).notNullable(); //check datatypecheck
		table.string("description", 255);
		table.boolean("contact_phone").notNullable();
		table.boolean("contact_text").notNullable();
		table.boolean("stops");
		table.boolean("terms").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("tripa2zusers");
};
