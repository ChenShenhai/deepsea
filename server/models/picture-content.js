const dbUtils = require('./../utils/db-util')
const pictureContent = {

  async create ( model ) {
    let sqlResult = await dbUtils.insertData( 'picture_content', model )
    let result = {
      success: false,
      message: '',
    }
    if ( sqlResult && sqlResult.insertId && sqlResult.insertId * 1 > 0 ) {
      result.success = true
    }
    return result
  },

  async getOneById( id ) {

    let sql = `
      SELECT 
        c.id AS id, 
        c.name AS name, 
        c.content AS content, 
        c.create_time AS create_time, 
        c.update_time AS update_time, 
        a.name AS album_name,
        a.id AS album_id,
        u.name AS user_name,
        c.user_id AS user_id
      FROM 
        picture_content AS c,
        picture_album AS a, 
        user_info AS u 
      WHERE 
        c.id = ${id}
        AND u.id = c.user_id
        AND c.album_id = a.id`
    let result = await dbUtils.query(sql)
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
        c.name AS name, 
        c.content AS content, 
        c.create_time AS create_time, 
        c.update_time AS update_time, 
        a.name AS album_name,
        a.id AS album_id,
        u.name AS user_name,
        c.user_id AS user_id
      FROM 
        picture_content AS c,
        picture_album AS a, 
        user_info AS u  
      WHERE 
        u.id = c.user_id
        AND c.album_id = a.id
      ORDER BY 
        update_time DESC
      LIMIT 
        ${options.start}, ${options.end} `
    let result = await dbUtils.query(sql)
    return result
  },

  async count( ) {
    let result = await dbUtils.count('picture_content')
    return result
  },

  async update( options, id ) {
    let sqlResult = await dbUtils.updateData( 'picture_content', options, id )
    let result = {
      success: false,
      message: '',
    }

    if ( sqlResult && sqlResult.affectedRows && sqlResult.affectedRows * 1 > 0 ) {
      result.success = true
    }
    return result
  },

}

module.exports = pictureContent


