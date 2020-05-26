'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('post_road_maps', 
    [
      {
        post_id: 1,
        roadmap_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        roadmap_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 3,
        roadmap_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        roadmap_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        roadmap_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        roadmap_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        roadmap_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        roadmap_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 9,
        roadmap_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 10,
        roadmap_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 11,
        roadmap_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 12,
        roadmap_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 13,
        roadmap_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 14,
        roadmap_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('post_road_maps', null, {}),
};


