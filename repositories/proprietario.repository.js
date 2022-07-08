import db from "./db.js";

export default {

    async getProprietarios() {
        const conn = await db.connect();

        try {
            
            const sql = "SELECT * FROM proprietarios";

            const res = await conn.query(sql);

            return res.rows;

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async getProprietario(id) {
        const conn = await db.connect();

        try {
            
            const sql = "SELECT * FROM proprietarios WHERE proprietario_id = $1";

            const res = await conn.query(sql, [id]);

            return res.rows;

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async createProprietario(proprietario) {
        const conn = await db.connect();

        try {
            
            const sql = "INSERT INTO proprietarios(nome, telefone) VALUES($1, $2) RETURNING *";

            const res = await conn.query(sql, [proprietario.nome, proprietario.telefone]);

            return res.rows[0];

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async updateProprietario(proprietario) {
        const conn = await db.connect();

        try {
            
            const sql = "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";

            const res = await conn.query(sql, [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]);

            return res.rows[0];

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    },

    async deleteProprietario(id) {
        const conn = await db.connect();

        try {
            
            const sql = "DELETE FROM proprietarios WHERE proprietario_id = $1";

            await conn.query(sql, [id]);

        } catch (err) {
            throw err;
        } finally {
            conn.release();
        }
    }
}
