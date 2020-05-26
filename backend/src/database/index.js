import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import Role from '../app/models/Role';
import UserDiscipline from '../app/models/UserDiscipline';
import Discipline from '../app/models/Discipline';
import Post from '../app/models/Post';
import RoadMap from '../app/models/RoadMap';
import PostRoadMap from '../app/models/PostRoadMap';
import PostRating from '../app/models/PostRating';
import UserRating from '../app/models/UserRating';
import Group from '../app/models/Group';
import MensageGroup from '../app/models/MensageGroup';

const models = [
  User, 
  File, 
  Role, 
  UserDiscipline, 
  Discipline, 
  PostRoadMap, 
  Post, 
  RoadMap,
  PostRating,
  UserRating,
  Group,
  MensageGroup
];
// This is where we make our database connection
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // this is where we scroll to database to search the entity
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
