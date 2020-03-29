const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    },    
    async list(request,response){        
        const allOngs = await connection.select('*').from('ongs');
    
            return response.json({ allOngs });       
    }

};