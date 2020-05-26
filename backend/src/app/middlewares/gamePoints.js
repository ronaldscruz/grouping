import jwt from 'jsonwebtoken';
import UserDiscipline from '../models/UserDiscipline';
import Post from '../models/Post';
import RoadMap from '../models/RoadMap';

export default async (req, res, next) => {
  try {
    const rote = req.path;
    const method = req.method;
    var disciplineId = null;
    var exp;
    // this is a callback that will decoded the token, bringing the id for us.
    res.on('finish', async function() {
      let code = this.statusCode;
      
      console.log(`with code ${code}`);
      if(code === 200){
        if(rote === "/posts" && method === "POST"){
          disciplineId = req.body.discipline_id;
          exp = 0.05;
        }
        if(rote === "/likes" && method === "POST"){
          const {post_id} = req.body;
          const {discipline_id} = await Post.findByPk(post_id);
          disciplineId = discipline_id;
          exp = 0.01;
        }
        if(rote === "/roadmaps" && method === "POST"){
          disciplineId = req.body.discipline_id;
          exp = 0.03;
        }
        if(rote === "/posts/addRoadMap" && method === "POST"){
          const {post_id} = req.body;
          const {discipline_id} = await RoadMap.findByPk(post_id);
          disciplineId = discipline_id;
          exp = 0.02;
        }
        if(rote === "/groups" && method === "POST"){
          disciplineId = req.body.discipline_id;
          exp = 0.03;
        }
        if(disciplineId != null){
          const {level_discipline} = await UserDiscipline.findOne({where: { user_id: req.userId, discipline_id: disciplineId}});
          if(level_discipline>99.99){
            console.log("O usuário atingiu o nível máximo da disciplina")
          }
          await UserDiscipline.increment({level_discipline: exp}, {where: { user_id: req.userId, discipline_id: disciplineId}});
        }
      }
     })
  
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
