const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"m2r3c287",
    host:"localhost",
    port:"5432",
    database:"perntodo"
});

module.exports = pool;