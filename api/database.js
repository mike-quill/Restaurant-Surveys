const pgp = require('pg-promise')();

const db = pgp(process.env.DBCONN);

module.exports = db;
