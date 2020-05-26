import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const provider = await User.findAll({
      where: { provider: true },
      // In attributes we can select what we want to show the user.
      attributes: ['id', 'name', 'email', 'avatar_id'],
      // In include we can make relationships between entities.
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(provider);
  }
}

export default new ProviderController();
