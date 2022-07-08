import serv from "../services/animal.service.js";

export default {

    async getAnimais(req, res, next) {
        try {
            const animais = await serv.getAnimais(req.query.proprietario_id);
            res.send(animais);
        } catch(err) {
            next(err);
        }
    },

    async getAnimal(req, res, next) {
        try {
            let id = req.params.id;

            const animal = await serv.getAnimal(id);
            res.send(animal);
        } catch(err) {
            next(err);
        }
    },

    async createAnimal(req, res, next) {
        try {
            let animal = req.body;

            if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
                res.status(400);
                throw new Error("Nome, Tipo e Proprietário ID são obrigatórios");
            }

            animal = await serv.createAnimal(animal);
            res.send(animal);
        } catch(err) {
            next(err);
        }
    },

    async updateAnimal(req, res, next) {
        try {
            let animal = req.body;

            if (!animal.nome || !animal.tipo || !animal.proprietario_id || !animal.animal_id) {
                res.status(400);
                throw new Error("Animal ID, Nome, Tipo e Proprietário ID são obrigatórios");
            }

            animal = await serv.updateAnimal(animal);
            res.send(animal);
        } catch(err) {
            next(err);
        }
    },

    async deleteAnimal(req, res, next) {
        try {
            let id = req.params.id;

            await serv.deleteAnimal(id);
            res.end();
        } catch(err) {
            next(err);
        }
    }
}