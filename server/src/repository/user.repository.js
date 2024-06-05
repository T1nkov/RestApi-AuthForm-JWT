const pool = require('../db')

const authUserDB = async (email, password) => {
    const client = await pool.connect();
    const sql = "SELECT * from Users where email=$1 and password =$2 returning *";
    const { rows } = await client.query(sql, [email, password]);
    client.release();
    return rows;
};

const createUserDB = async (name, surname, email, password) => {
    const client = await pool.connect();
    const sql = "INSERT INTO Users (name, surname, email, password) values ($1,$2,$3,$4) returning *";
    const { rows } = await client.query(sql, [name, surname, email, password]);
    client.release();
    return rows;
};

const getUserDB = async () => {
    const client = await pool.connect();
    const sql = "select * from Users";
    const { rows } = await client.query(sql);
    client.release();
    return rows;
};

const getUserIdDB = async (id) => {
    const client = await pool.connect();
    const sql = "select * from Users where id = $1";
    const { rows } = await client.query(sql, [id]);
    client.release();
    return rows[0];
};

async function deleteUserDB(id) {
    const client = await pool.connect()

    const sql = 'delete from users where id = $1 returning *'

    const { rows } = await client.query(sql, [id])

    client.release()
    return rows
}



module.exports = { createUserDB, deleteUserDB,getUserDB,getUserIdDB,authUserDB }