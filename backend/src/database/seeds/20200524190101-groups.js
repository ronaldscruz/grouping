const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "groups",
      [
        {
          title: "grupo de historia",
          discipline_id: 1,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "grupo de português",
          discipline_id: 2,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "grupo de redação",
          discipline_id: 3,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "grupo de geografia",
          discipline_id: 4,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "grupo de fisica",
          discipline_id: 5,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "grupo de matematica",
          discipline_id: 6,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('groups', null, {}),
};