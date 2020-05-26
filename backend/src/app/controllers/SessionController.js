import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth';
import User from '../models/User';
/* SessionController is a controller where we create the session(token)
for the user can realize the actions in the app.
 */
class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
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
    const { email, password } = req.body;
    // Here we find a user by email
    const user = await User.findOne({ where: { email } });
    // And check if user exist.
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    // after check user, we check the password if is correct.
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name } = user;
    // if the user exist and the password is correct we create the token.
    return res.json({
      user: {
        id,
        name,
        email,
      },
      /**
       * The token is made up of 3 parts: header, payload and signature. We put the user id in the token and the
       * encrypted word "gobarber" and then set the expiration of that token.
       */
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
