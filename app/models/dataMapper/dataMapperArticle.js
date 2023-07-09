const client = require('../dbClient');

const datamapper = {
  async saveArticle(title, summary, date, attach, userId) {
    const query = {
      text: `INSERT INTO "event"
      (title, summary, date, attach, author)
      VALUES
      ($1, $2, $3, $4, $5);`,
      values: [title, summary, date, attach, userId],
    };
    const data = await client.query(query);
    return data.rowCount;
  },
};

module.exports = datamapper;