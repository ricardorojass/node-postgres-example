const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'postgrespw',
    host: 'localhost',
    port: 5432,
    database: 'node-example'
});

module.exports = pool