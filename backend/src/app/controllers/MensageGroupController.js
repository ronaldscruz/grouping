import * as Yup from 'yup';
import User from '../models/User';
import MensageGroup from '../models/MensageGroup';


 class MensageGroupController {
   async store(req, res) {
    const schema = Yup.object().shape({
      mensage: Yup.string().required(),
      group_id:Yup.number()
      .required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {mensage,group_id} = req.body;
     const mensagegroup = await MensageGroup.create({
      user_id: req.userId,
      group_id: group_id,
      mensage: mensage,

    });
     return res.json(mensagegroup);
   }
   async index(req,res){
    const {groupId} = req.params;
    const mensages = await MensageGroup.findAll({
           where: {
             
            group_id: groupId,
           },
           include: [
            { model: User, as: 'user', attributes: ['name']}
           ]
         })
     if(mensages.length == 0){
       return res.json({message: "Não há nenhum artigo com esta disciplina"})
     }
     return res.json(mensages)
  }
}

 export default new MensageGroupController();
