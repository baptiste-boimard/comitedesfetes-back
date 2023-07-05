const client = require('../dbClient');

const datamapper = {
  /**
   * Method to get only one user
   * @memberof datamapper
   * @method getOneUser
   * @param {String} email
   * @returns {Boolean} user existing or not   
   * */
  async getOneUser(email) {
    const query = {
      text: `SELECT * FROM "admin"
            WHERE email = $1`,
      values: [email],
    };
    const data = await client.query(query);
    return data.rows[0];
  },
  /**
   * @memberof datamapper
   * @method userSignup
   * @param {String} email 
   * @param {String} hashPassword 
   * @returns {Boolean} insert is ok or nok
   */
  async userSignup(email, hashPassword) {
    const query = {
      text: `INSERT INTO "admin"
            (email, password)
            VALUES
            ($1, $2);`,
      values: [email, hashPassword],
    };
    const data = await client.query(query);
    return data.rowCount;
  },
};

module.exports = datamapper;