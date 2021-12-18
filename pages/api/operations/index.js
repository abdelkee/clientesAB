import { dbConnect } from "../../../utils/mongoose";
import operation from '../../../models/operation';

dbConnect();

export default async function operationHandler(req, res) {
    switch (req.method) {
        case "GET":
            try {
                const operations = await operation.find();
                if(!operations) return res.json('failed to load operations');
                res.status(200).json(operations);
            } catch (error) {
                res.json({el_error: error.message});
            }
            
        case "POST":
            try {
                const response = await operation.insertMany(req.body);
                if(!response) return res.json('failed to add operation');
                res.status(201).json('operation added');
            } catch (error) {
                res.json({el_error: error.message});
            }
    
        default:
            return res.json('method not found');
    }
}