'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('road_maps', 
    [
      {
        title: "Minha trilha de Historia",
        description: "uma pequena trila sobre historia",
        discipline_id: 1,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Português",
        description: "uma pequena trila sobre português",
        discipline_id: 2,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Redações",
        description: "uma pequena trila sobre redações",
        discipline_id: 3,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Geografia",
        description: "uma pequena trila sobre geografia",
        discipline_id: 4,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Fisica",
        description: "uma pequena trila sobre fisica",
        discipline_id: 5,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Matematica",
        description: "uma pequena trila sobre matematica",
        discipline_id: 6,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('road_maps', null, {}),
};


