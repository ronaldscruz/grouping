'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('disciplines', 
    [
      {
        name: 'Historia',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Português',
        created_at: new Date(),
        updated_at: new Date()
       
      },
      {
        name: 'Redação',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Geografia',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Fisica',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Matematica',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('disciplines', null, {}),
};


