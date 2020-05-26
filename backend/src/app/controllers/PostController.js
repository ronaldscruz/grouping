import * as Yup from 'yup';

import Post from '../models/Post';
import PostRating from '../models/PostRating';
import Discipline from '../models/Discipline';
import User from '../models/User';
import RoadMap from '../models/RoadMap';
import PostRoadMap from '../models/PostRoadMap';


 class PostController {
   async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string()
        .required(),
        discipline_id: Yup.number()
        .required(),
        tag: Yup.string()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {discipline_id,title,content, tag} = req.body;
    if(discipline_id<1 || discipline_id>6){
      return res.status(400).json({ error: 'Validation fails' });
    }
     const post = await Post.create({
      user_id: req.userId,
      discipline_id: discipline_id,
      content: content,
      title: title,
      tag: tag
    });
    const rating = await PostRating.create({
      post_id: post.id,
    })
     return res.json({
      post,
      rating,
      });
   }
   async index(req,res){
     const {category} = req.params;
     const posts = await Post.findAll({
            where: {
              discipline_id: category,
            },
            attributes: ['id', 'title', 'content', 'tag' ],
            include: [ 
              { model: PostRating, as: 'postRate', attributes: ['id', 'rating']}, 
              { model: Discipline, as: 'discipline', attributes: ['id', 'name']},
              { model: User, as: 'userPost', attributes: ['id', 'name']} ]
          })
      if(posts.length == 0){
        return res.status(404).json({message: "Não há nenhum artigo com esta disciplina"})
      }
      return res.json(posts)
   }
   async indexId(req,res){
     const {postId} = req.params
     const postExist = await Post.findByPk(
       postId, 
       {
         include: [ { model: PostRating, as: 'postRate', attributes: ['id', 'rating']}, 
         { model: Discipline, as: 'discipline', attributes: ['id', 'name']},
         { model: User, as: 'userPost', attributes: ['id', 'name']} 
        ]})
     if(!postExist){
      return res
              .status(404)
              .json({ error: 'Artigo não encontrado ):' });
   }

   return res.json(postExist);
 }
    async addToRoad(req,res){
      const schema = Yup.object().shape({
        post_id: Yup.number().required(),
        roadmap_id: Yup.number().required()
      });
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }
      const {post_id, roadmap_id} = req.body;
      
      const checkPost = await Post.findOne({
        where: {
          id: post_id,
        }
      })

      if(!checkPost){
        return res.status(401).json({error: { message: "Post inválido"}})
      }

      const checkRoadMap = await RoadMap.findOne({
        where: {
          id: roadmap_id,
          user_id: req.userId
        }
      })

      if(!checkRoadMap){
        return res.status(401).json({error: { message: "Trilha inválida"}})
      }
      const checkExistPost = await PostRoadMap.findOne({
        where: {
          roadmap_id: roadmap_id,
          post_id: post_id
        }
      })
      if(checkExistPost){
        return res.status(400).json({error: {message: "Não é possível adicionar a mesma publicação na trilha"}})
      }
       const roadmap = await PostRoadMap.create({
        post_id: post_id,
        roadmap_id: roadmap_id,
      });

       return res.json(roadmap);
    }

    async addLike(req,res){
      const schema = Yup.object().shape({
        post_id: Yup.number().required(),
        roadmap_id: Yup.number().required(),
      });
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }
      const {post_id, roadmap_id} = req.body;
      
      const checkPost = await Post.findOne({
        where: {
          id: post_id,
          user_id: req.userId
        }
      })

      if(!checkPost){
        return res.status(401).json({error: { message: "Post inválido"}})
      }

      const checkRoadMap = await RoadMap.findOne({
        where: {
          id: roadmap_id,
          user_id: req.userId
        }
      })

      if(!checkRoadMap){
        return res.status(401).json({error: { message: "Trilha inválida"}})
      }
      const checkExistPost = await PostRoadMap.findOne({
        where: {
          roadmap_id: roadmap_id,
          post_id: post_id
        }
      })
      if(checkExistPost){
        return res.status(400).json({error: {message: "Não é possível adicionar a mesma publicação na trilha"}})
      }
       const roadmap = await PostRoadMap.create({
        post_id: post_id,
        roadmap_id: roadmap_id,
      });

       return res.json(roadmap);
    }
    
}

 export default new PostController();
