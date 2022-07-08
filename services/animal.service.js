import repo from "../repositories/animal.repository.js";

export default {

    async getAnimais(proprietario_id) {
        if (proprietario_id) {
            return await repo.getAnimaisByProprietarioId(proprietario_id);
        } else {
            return await repo.getAnimais();
        }
    },

    async getAnimal(id) {
        return await repo.getAnimal(id);
    },

    async createAnimal(animal) {
        return await repo.createAnimal(animal);
    },

    async updateAnimal(animal) {
        return await repo.updateAnimal(animal);
    },

    async deleteAnimal(id) {
        await repo.deleteAnimal(id);
    }
}
