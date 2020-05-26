const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Equipe Grouping",
          email: "admin@grouping.com",
          password_hash: bcrypt.hashSync("123456", 8),
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Fulano",
          email: "fulano@grouping.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};