const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "mensage_groups",
      [
        {	
          mensage: "eu gosto muito de historia",
          group_id: 1,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 1,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu gosto muito de português",
          group_id: 2,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 2,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu gosto muito de fazer Redações",
          group_id: 3,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 3,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu gosto muito de Geografia",
          group_id: 4,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 4,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu gosto muito de Fisica",
          group_id: 5,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 5,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu gosto muito de Matematica",
          group_id: 6,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          mensage: "eu tambem !!!",
          group_id: 6,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('mensage_groups', null, {}),
};