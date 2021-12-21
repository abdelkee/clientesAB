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
          res.json({GET_error: error.message});
        }
        
      case "POST":

        // console.log('cl',req.body.operation);
        const client = await cliente.find({cliente: req.body.cliente});

        // create new client
        if(client.length === 0) {
          try {  
            const response = await new cliente(req.body).save();
            if(!response) return res.json({response: 'failed'});
            return res.json('Client created');
    
          } catch (error) {
              return res.json({POST_client_error: error.message});
          }
        }

        // add new operation
        const clientOps = client[0].operation;
        const newOps = [...clientOps, req.body.operation];

        try {
          const response = await cliente.findOneAndUpdate({cliente: req.body.cliente}, {operation: newOps})
          if(!response) return res.json({response: 'failed'});
          return res.json({response: 'Operation added'});

        } catch (error) {
          return res.json({POST_Operation_error: error.message});
        }

      case 'PATCH':

        try {
          const response = await cliente.findOneAndUpdate(
            {
              "_id": req.body.clientId
            }, // document filter
            {
              "$set": {
                "operation.$[elem]": req.body.newVals
              }
            }, // element update
            {
              "arrayFilters": [{
                "elem._id": req.body.opId
              }]
            }  // element filter
          );
          if(!response) return res.json('failed to update');
          res.status(200).json('Updated');
        } catch (error) {
          return res.json({PATCH_error: error.message});
        }

      case 'PUT':

        try {
          const response = await cliente.findOneAndUpdate(
            {
              "_id": req.body.clientId
            },
            {
              "$pull": {"operation": {"_id": req.body.opId}}
            }
          );
          if(!response) return res.json('failed to remove');
          res.status(200).json('Removed');
        } catch (error) {
          return res.json({PUT_error: error.message});
        }

      default:
        return res.json('method not found');
    }


  }
