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

        // console.log('cl',req.body.operation);
        const client = await cliente.find({cliente: req.body.cliente});
        if(client.length === 0) {
          try {  
            const response = await new cliente(req.body).save();
            if(!response) return res.json({response: 'failed'});
            return res.json('Created');
    
          } catch (error) {
              return res.json({el_error: error.message});
          }
        }

        const clientOps = client[0].operation;
        const newOps = [...clientOps, req.body.operation];

        try {
          const response = await cliente.findOneAndUpdate({cliente: req.body.cliente}, {operation: newOps})
          if(!response) return res.json({response: 'failed'});
          return res.json({response: 'Operation added'});

        } catch (error) {
          return res.json({el_error: error.message});
        }

      default:
        return res.json('method not found');
    }


  }
