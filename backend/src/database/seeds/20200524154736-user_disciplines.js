module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "user_disciplines",
      [
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 100,
          interest_level: 16.66,
          user_id: 1,
          discipline_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 0,
          interest_level: 0,
          user_id: 2,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 10,
          interest_level: 45.00,
          user_id: 2,
          discipline_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 5,
          interest_level: 30.00,
          user_id: 2,
          discipline_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 2,
          interest_level: 25.00,
          user_id: 2,
          discipline_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 0,
          interest_level: 0,
          user_id: 2,
          discipline_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          level_discipline: 0,
          interest_level: 0,
          user_id: 2,
          discipline_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
       
      ],
      {}
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('user_disciplines', null, {}),
};