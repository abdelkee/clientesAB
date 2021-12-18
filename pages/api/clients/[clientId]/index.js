import cliente from "../../../../models/cliente";
import { dbConnect } from "../../../../utils/mongoose";

dbConnect();

export default async function oneClientHandler(req, res) {
    const id = req.query.clientId;
    try {
        const theClient = await cliente.findById(id);
        if(!theClient) return res.json('failed to load the client');
        res.status(200).json(theClient);
    } catch (error) {
        res.json({el_error : error.message});
    }
}