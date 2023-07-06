require('dotenv').config();

const {Pool} = require('pg');

/**Method allows to establish connection to the database
 * @type {Object}
 * @namespace client
 * @export client
 * @class Pool
 */
// //Remote connection
// const client = new Pool({

//   connectionsString: process.env.DATABASE_URL,
//   ssl : {rejectUnauthorized: false, // Accept the fact that we aren't in SSL security
//   },
// });

//Local connection
const client = new Pool({
connectionString: DATABASE_URL,
// user: process.env.PG_USER,
// password: process.env.PG_PASSWORD,
// database: process.env.PG_DATABASE,
});

client.connect();

module.exports = client;
