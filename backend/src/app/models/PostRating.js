import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

// Here is the model, where we set what the user/client must to send by body request
class PostRating extends Model {
  static init(sequelize) {
    super.init(
      {
        rating: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    /* his addHook is literally a hook that we pass a parameter to when we want
    to perform an action before saving or after saving
    */
    
    // This return will bring the model that is running
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: 'post_id', as:'postRate'});
  }
  // this is where we do the relations datas like one-to-one one-to-many many-to-many
}

export default PostRating;
