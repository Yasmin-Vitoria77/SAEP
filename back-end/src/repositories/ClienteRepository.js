const pool = require('../config/database');

class ClienteRepository {
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM cliente ORDER BY id DESC');
        return rows;
    }

    async findById(id) {
        const [clienteRows] = await pool.query
    }
}