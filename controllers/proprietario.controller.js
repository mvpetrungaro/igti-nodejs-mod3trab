import serv from "../services/proprietario.service.js";

export default {

    async getProprietarios(req, res, next) {
        try {
            const proprietarios = await serv.getProprietarios();
            res.send(proprietarios);
        } catch(err) {
            next(err);
        }
    },

    async getProprietario(req, res, next) {
        try {
            let id = req.params.id;

            const proprietario = await serv.getProprietario(id);
            res.send(proprietario);
        } catch(err) {
            next(err);
        }
    },

    async createProprietario(req, res, next) {
        try {
            let proprietario = req.body;

            if (!proprietario.nome || !proprietario.telefone) {
                res.status(400);
                throw new Error("Nome e Telefone são obrigatórios");
            }

            proprietario = await serv.createProprietario(proprietario);
            res.send(proprietario);
        } catch(err) {
            next(err);
        }
    },

    async updateProprietario(req, res, next) {
        try {
            let proprietario = req.body;

            if (!proprietario.nome || !proprietario.telefone || !proprietario.proprietario_id) {
                res.status(400);
                throw new Error("Proprietário ID, Nome e Telefone são obrigatórios");
            }

            proprietario = await serv.updateProprietario(proprietario);
            res.send(proprietario);
        } catch(err) {
            next(err);
        }
    },

    async deleteProprietario(req, res, next) {
        try {
            let id = req.params.id;

            await serv.deleteProprietario(id);
            res.end();
        } catch(err) {
            next(err);
        }
    }
}