'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', 
    [
      {
        name: 'Padawan',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cavaleiro',
        created_at: new Date(),
        updated_at: new Date()
      },  {
        name: 'Mestre Jedi',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('roles', null, {}),
};


