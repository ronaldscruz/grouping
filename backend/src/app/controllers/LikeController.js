import * as Yup from 'yup';

import Post from '../models/Post';
import PostRating from '../models/PostRating';
import UserRating from '../models/UserRating';


 class LikeController {
   async store(req, res) {
    const schema = Yup.object().shape({
      post_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {post_id} = req.body;
    const checkLike = await UserRating.findOne({
      where: {
      user_id: req.userId,
      post_id: post_id
    }});
    
    if(checkLike) {
      return res.status(400).json({error: { message: "O usuário já curtiu"} })
    }
    
    const liked = await UserRating.create({
      user_id: req.userId,
      post_id: post_id
   });

   await PostRating.increment({rating: 1}, {where: { post_id : post_id}});

   return res.json(liked);
   }

  async delete(req, res){
    const {postId} = req.params;
    const checkLike = await UserRating.findOne({where:{
      user_id: req.userId,
      post_id: postId
    }});
    
    if(!checkLike) {
      return res.status(404).json({error: { message: "Post não encontrado" }})
    }
    
    const liked = await UserRating.destroy({where: { post_id: postId, user_id: req.userId }})

   await PostRating.decrement({rating: 1}, {where: { post_id : postId }});

   return res.send();
  }
}

 export default new LikeController();
