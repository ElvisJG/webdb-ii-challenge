exports.seed = function(knex) {
  const tableName = 'cars';

  // Deletes ALL existing entries
  return knex(tableName)
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          vin: '1234567890123456A',
          make: 'Tesla',
          model: 'Model X',
          milage: 1337,
          transmission: '2 speed',
          titleStatus: 'Clean'
        },
        {
          vin: '1234567890123456B',
          make: 'Tesla',
          model: 'Model Y',
          milage: 0,
          transmission: '1 speed',
          titleStatus: 'Clean'
        },
        {
          vin: '1234567890123456C',
          make: 'Ford',
          model: 'F150',
          milage: 2000,
          transmission: '1 speed',
          titleStatus: 'Salvaged'
        },
        {
          vin: '1234567890123456D',
          make: 'Nissan',
          model: 'Rogue',
          milage: 2500,
          transmission: '2 speed',
          titleStatus: 'Clean'
        },
        {
          vin: '1234567890123456E',
          make: 'Honda',
          model: 'Civic',
          milage: 12500,
          transmission: '1 speed',
          titleStatus: 'Salvaged'
        }
      ]);
    });
};
