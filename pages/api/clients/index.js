import cliente from '../../../models/cliente';
import {dbConnect} from '../../../utils/mongoose';

dbConnect();

export default async function handler(req, res) {

    switch (req.method) {
      case "GET":
        try {
          const clients = await cliente.find({});
          if(!clients) return res.json({response: 'failed'});
          return res.status(200).json(clients);
        
        } catch {
          res.json({el_error: error.message});
        }
        
      case "POST":
        try {  
          const response = await new cliente(req.body).save();
          if(!response) return res.json({response: 'failed'});
          res.json({response: 'created'});
  
        } catch (error) {
            res.json({el_error: error.message});
        }
      
      default:
        return res.json('method not found');
    }


  }
