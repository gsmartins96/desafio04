class NewsModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(news) {
    const {
      title, image, relatedItems, noticeLink, subtitle,
    } = news;

    const sql = `
      INSERT INTO news (title, image, relatedItems, noticeLink, subtitle) 
      VALUES (?,?,?,?,?)
    `;

    const [result] = await this.dbConnection.execute(
      sql,
      [title, image, relatedItems, noticeLink, subtitle],
    );
    return result.insertId;
  }

  async search(query) {
    let sql = `
      SELECT * FROM news 
      WHERE 1 = 1 
    `;

    const params = [];

    if (query.title) {
      sql += `
        AND title like ? 
        `;
      params.push(`%${query.title}%`);
    }

    if (query.subtitle) {
      sql += `
        AND subtitle like ? 
          `;
      params.push(`%${query.subtitle}%`);
    }

    const [result] = await this.dbConnection.execute(sql, params);
    return result;
  }
}

module.exports = NewsModel;
