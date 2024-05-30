const { Pool } = require("pg");

const pool = new Pool({
  user: 'postgres',
  port: '5432',
  database: 'restApi-AuthForm',
  password: '2092013',
  host: 'localhost',
});

module.exports = pool;