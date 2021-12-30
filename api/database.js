const pgp = require('pg-promise')();

const db = pgp(process.env.DBCONNPORTFOLIO);

module.exports = db;
