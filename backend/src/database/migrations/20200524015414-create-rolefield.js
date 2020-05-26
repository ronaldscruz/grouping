/**
 * to create a migration you should to do "yarn sequelize migration:create --name="name""
 * to migrate the entity to database the command is "yarn sequelize db:migrate"
 * to undo the migrate the command is "yarn sequelize db:migrate:undo" this will delete the last migrate.
 * */
/**
 * Here is an example of when we need to add another column to an entity.NEVER,
 * I repeat NEVER, in a work environment, we must exclude the migration generated and add a new column
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.addColumn('users', 'role_id', {
      type: Sequelize.INTEGER,
      references: { model: 'roles', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      defaultValue: 1,
      allowNull: true,
    });
  },

  down: queryInterface => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    Example:
    */
    return queryInterface.removeColumn('users', 'role_id');
  },
};
