import jwt from 'jsonwebtoken';

import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // This middleware is a check to see if the user is logged in.
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  /**
   * This is a method of unstructuring an array.
   * basically what's happening
   * [
   *    bearer,
   *    token
   * ]
   * when i do [, token] i'm just catching the token and ignoring the bearer
   */
  const [, token] = authHeader.split(' ');

  try {
    // this is a callback that will decoded the token, bringing the id for us.
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
