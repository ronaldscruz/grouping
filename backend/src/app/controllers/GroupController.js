import * as Yup from 'yup';

import Group from '../models/Group';


 class GroupController {
   async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      discipline_id:Yup.number()
      .required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {discipline_id,title} = req.body;
    if(discipline_id<1 || discipline_id>6){
      return res.status(400).json({ error: 'Validation fails' });
    }
     const group = await Group.create({
      user_id: req.userId,
      discipline_id: discipline_id,
      title: title,

    });
     return res.json(group);
   }

 async index(req,res){
    const {category} = req.params;
    const group = await Group.findAll({
           where: {
             
           discipline_id:category,
           }
         })
     if(group.length == 0){
       return res.json({message: "Não há nenhum artigo com esta disciplina"})
     }
     return res.json(group)
  }
}


 export default new GroupController();
