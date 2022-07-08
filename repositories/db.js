import pg from "pg";

let pool;

export default {
    async connect() {
        if (!pool) {
            pool = new pg.Pool({
                connectionString: process.env.DB_CONN_STRING
            });
        }
    
        return pool.connect();
    }
}
