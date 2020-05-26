import * as Yup from 'yup';

import RoadMap from '../models/RoadMap';
import Discipline from '../models/Discipline';
import User from '../models/User';
import Post from '../models/Post';


 class RoadMapController {
   async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      discipline_id: Yup.number().required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {discipline_id,title,description} = req.body;

     const roadmap = await RoadMap.create({
      user_id: req.userId,
      discipline_id: discipline_id,
      title: title,
      description:description
    });
     return res.json(roadmap);
   }
   async index(req,res){
     const {category} = req.params;
     const roadmaps = await RoadMap.findAll({
            where: {
              discipline_id: category,
            },
            include: [
              { model: Discipline, as: 'discipline', attributes: ['id', 'name']},
              { model: User, as: 'user', attributes: ['id', 'name']},
            ]
          })
      if(roadmaps.length == 0){
        return res.json({message: "Não há nenhuma trilha nesta disciplina"})
      }
      return res.json(roadmaps)
   }
   async indexId(req,res){
     const {roadmapId} = req.params
     const roadmap = await RoadMap.findByPk(roadmapId, {
       attributes: ['id', 'title', 'user_id','description'],
       include: [
        { model: Discipline, as: 'discipline', attributes: ['id', 'name']},
        { model: User, as: 'user', attributes: ['id', 'name']},
        { model: Post, 
          as: 'posts', 
          attributes: ['id', 'title'], 
          include: [{ model: User, as: 'userPost', attributes: ['id', 'name']}]
        }
       ]
     })
     if(!roadmap){
      return res
              .status(404)
              .json({ error: 'Trilha não encontrada ):' });
   }
   return res.json(roadmap);
 }
}

 export default new RoadMapController();
