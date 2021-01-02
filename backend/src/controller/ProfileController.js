const connection = require('../database/connection');

module.exports = {

    // para listar casos Especifico (index)
    async index(request, response) {

        const ong_id = request.headers.authorization;

        const casos_esp = await connection('incidents')
        .where('ong_id',ong_id).select('*');

        // if (casos_esp.ong_id != ong_id) {
        //     return response.status(203).json({ error: 'ONG inexistente'});
        // }
        return response.json(casos_esp);
    },

};
