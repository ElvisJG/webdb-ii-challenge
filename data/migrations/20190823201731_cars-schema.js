// the changes we want to make
exports.up = function(knex) {
  // create a cars table
  // define the schema
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl
      .string('vin', 17)
      .unique()
      .notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.string('transmission', 128);
    tbl.string('titleStatus', 128);
  });
};

// undoes the changes
exports.down = function(knex) {
  // drop the cars table
  return knex.schema.dropTableIfExists('cars');
};
