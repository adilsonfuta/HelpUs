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

        const { page=1 }= request.query;
        const [total_casos]= await connection('incidents').count(); 

        const casos = await connection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id').limit(5)
        .offset((page-1)*5)
        .select(
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf');

        response.header('X-Total-Count', total_casos['count(*)']);
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
