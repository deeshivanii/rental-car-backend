const { Client } = require('pg');
require('dotenv').config();

const connection = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect()
    .then(() => {
        console.log("PostgreSQL Connection Successful");
    })
    .catch((err) => {
        console.error("PostgreSQL Connection Failed", err);
    });

module.exports = connection;
