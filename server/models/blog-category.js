const dbUtils = require('./../utils/db-util')
const blogCategory = {

  async create ( model ) {
    let sqlResult = await dbUtils.insertData( 'blog_category', model )
    let result = {
      success: false,
      message: '',
    }
    if ( sqlResult && sqlResult.insertId && sqlResult.insertId * 1 > 0 ) {
      result.success = true
    }
    return result
  },

  async getExistOne( options ) {
    let _sql = `
    SELECT * from blog_category
      where name="${options.name}" 
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  async getListByPage( options ) {
    let sql = `
      SELECT 
        c.id AS id, 
        c.name AS category_name, 
        c.create_time AS create_time, 
        c.update_time AS update_time, 
        u.name AS user_name 
      FROM 
        blog_category AS c, 
        user_info AS u 
      WHERE 
        u.id = c.user_id
      ORDER BY 
        id DESC
      LIMIT 
        ${options.start}, ${options.end} `
    let result = await dbUtils.query(sql)
    return result
  },

  async count() {
    let result = await dbUtils.count('blog_category')
    return result
  }

}

module.exports = blogCategory