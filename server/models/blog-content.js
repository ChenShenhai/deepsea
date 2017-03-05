const dbUtils = require('./../utils/db-util');
const blogContent = {

  async create ( model ) {
    let sqlResult = await dbUtils.insertData( 'blog_content', model );
    let result = {
      success: false,
      message: '',
    };
    if ( sqlResult && sqlResult.insertId && sqlResult.insertId * 1 > 0 ) {
      result.success = true;
    }
    return result;
  },

  async getOneById( id ) {

    let sql = `
      SELECT 
        co.id AS id, 
        co.name AS name, 
        co.content AS content, 
        co.create_time AS create_time, 
        co.update_time AS update_time, 
        ca.name AS category_name,
        ca.id AS category_id,
        u.name AS user_name,
        co.user_id AS user_id
      FROM 
        blog_content AS co,
        blog_category AS ca, 
        user_info AS u 
      WHERE 
        co.id = ${id}
        AND u.id = co.user_id
        AND co.category_id = ca.id`;
    let result = await dbUtils.query(sql);
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }

    return result;
  },

 
  async getListByPage( options ) {
    let sql = `
      SELECT 
        co.id AS id, 
        co.name AS name, 
        co.content AS content, 
        co.create_time AS create_time, 
        co.update_time AS update_time, 
        ca.name AS category_name,
        ca.id AS category_id,
        u.name AS user_name,
        co.user_id AS user_id
      FROM 
        blog_content AS co,
        blog_category AS ca, 
        user_info AS u 
      WHERE 
        u.id = co.user_id
        AND co.category_id = ca.id
      ORDER BY 
        update_time DESC
      LIMIT 
        ${options.start}, ${options.end} `;
    let result = await dbUtils.query(sql);
    return result;
  },

  async count( ) {
    let result = await dbUtils.count('blog_content');
    return result;
  },

  async update( options, id ) {
    let sqlResult = await dbUtils.updateData( 'blog_content', options, id );
    let result = {
      success: false,
      message: '',
    };

    if ( sqlResult && sqlResult.affectedRows && sqlResult.affectedRows * 1 > 0 ) {
      result.success = true;
    }
    return result;
  },

};

module.exports = blogContent;


