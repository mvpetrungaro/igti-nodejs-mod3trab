import db from "./db.js";

export default {

    async getAnimais() {
        const conn = await db.connect();

        try {
            
            const sql = " SELECT * " +
                        "   FROM animais ";

            const res = await conn.query(sql);

            return res.rows;

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async getAnimaisByProprietarioId(proprietario_id) {
        const conn = await db.connect();

        try {
            
            const sql = " SELECT * " +
                        "   FROM animais " +
                        "  WHERE proprietario_id = $1 ";

            const res = await conn.query(sql, [proprietario_id]);

            return res.rows;

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async getAnimal(id) {
        const conn = await db.connect();

        try {
            
            const sql = " SELECT * " +
                        "   FROM animais " +
                        "  WHERE animal_id = $1 ";

            const res = await conn.query(sql, [id]);

            return res.rows;

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async createAnimal(animal) {
        const conn = await db.connect();

        try {
            
            const sql = "     INSERT " +
                        "       INTO animais (nome, tipo, proprietario_id) " +
                        "     VALUES ($1, $2, $3) " +
                        "  RETURNING * ";

            const res = await conn.query(sql, [animal.nome, animal.tipo, animal.proprietario_id]);

            return res.rows[0];

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async updateAnimal(animal) {
        const conn = await db.connect();

        try {
            
            const sql = "    UPDATE animais " +
                        "       SET nome = $1, tipo = $2, proprietario_id = $3 " +
                        "     WHERE animal_id = $4 " +
                        " RETURNING * ";

            const res = await conn.query(sql, [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id]);

            return res.rows[0];

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async deleteAnimal(id) {
        const conn = await db.connect();

        try {
            
            const sql = " DELETE " +
                        "   FROM animais " + 
                        "  WHERE animal_id = $1 ";

            await conn.query(sql, [id]);

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    }
}
