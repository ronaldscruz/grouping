import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

// Here is the model, where we set what the user/client must to send by body request
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    /* his addHook is literally a hook that we pass a parameter to when we want
    to perform an action before saving or after saving
    */
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    // This return will bring the model that is running
    return this;
  }

  // this is where we do the relations datas like one-to-one one-to-many many-to-many
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.belongsTo(models.Role, { foreignKey: 'role_id', as: 'role' });
    this.belongsToMany(models.Discipline, {
      through: models.UserDiscipline,
      foreignKey: 'user_id', as: 'userExp'
    });
    this.belongsToMany(models.Post, {
      through: models.UserRating,
      foreignKey: 'user_id', as: 'userRating'
    });
    
    
  }

  // is a function that checks if the parameter is the same as the user password
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
