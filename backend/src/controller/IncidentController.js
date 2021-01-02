const connection = require('../database/connection');


module.exports = {

    // para criar casos 
    async create(request, response) {
        const { title, descriptions, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            descriptions,
            value,
            ong_id,
        })
        return response.json({ id });
    },

    // para listar casos (index)
    async index(request, response) {
        const casos = await connection('incidents').select('*');
        return response.json(casos);
    },

    // deletar casos 

    async deletar(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const caso_deletar = await connection('incidents')
            .where('id', id).select('ong_id').first();

        if (caso_deletar.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operacao nao permitida'});
        }

        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
        
    }


};
