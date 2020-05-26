import * as Yup from 'yup';
import User from '../models/User';
import Discipline from '../models/Discipline';
import UserDiscipline from '../models/UserDiscipline';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    // The store is a method that creates and saves data in the database.
    // Here we are verifing if the user already exists.
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const { id, name, email, provider,role_id } = await User.create(req.body);
    const disciplines = await Discipline.findAll();
    for(let discipline of disciplines){
      const discipline_id = discipline.id;
      const body = {
        discipline_id: discipline_id,
        user_id : id
      }
      await UserDiscipline.create(body);
    }


    return res.json({ id, name, email, provider,role_id });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, oldPassword } = req.body;
    // this id is coming from authMiddleware in routes file.
    const user = await User.findByPk(req.userId);
    // Here I confirm that the email the user is sending already exists.
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'Email is already in use' });
      }
    }
    // This is where I confirm if the user wants to change the password and if the password matches the old one
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Old Password does not match' });
    }

    const { id, name, provider, avatar_id } = await user.update(req.body);

    return res.json({ id, name, email, provider, avatar_id });
  }
  async index(req, res) {
    const user = await User.findByPk(req.userId,{ include: [
      { model: Discipline, 
        as: 'userExp', attributes: ['id', 'name',]
      }
    ]})
    return res.json(user);
  }
}

export default new UserController();
