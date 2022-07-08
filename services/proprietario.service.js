import repo from "../repositories/proprietario.repository.js";
import repoAnimal from "../repositories/animal.repository.js";

export default {

    async getProprietarios() {
        return await repo.getProprietarios();
    },

    async getProprietario(id) {
        return await repo.getProprietario(id);
    },

    async createProprietario(proprietario) {
        return await repo.createProprietario(proprietario);
    },

    async updateProprietario(proprietario) {
        return await repo.updateProprietario(proprietario);
    },

    async deleteProprietario(id) {

        const animais = await repoAnimal.getAnimaisByProprietarioId(id);

        if (animais.length) {
            throw new Error("Proprietário contém animais cadastrados e não pode ser removido");
        }
        
        await repo.deleteProprietario(id);
    }
}
