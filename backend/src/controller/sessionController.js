const connection = require('../database/connection');

module.exports = {

    // para listar casos Especifico (index)
    async create(request, response) {
        const { id } = request.body;
        const ong_id = await connection('ongs')
        .where('id',id).select('name').first();

        if (!ong_id){
            return response.status(400).json({ error: 'ID da ONG Invalido'});
        }
        return response.json(ong_id);
    },

};