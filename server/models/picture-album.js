const dbUtils = require('./../utils/db-util');
const pictureAlbum = {

  async create ( model ) {
    let sqlResult = await dbUtils.insertData( 'picture_album', model );
    let result = {
      success: false,
      message: '',
    };
    if ( sqlResult && sqlResult.insertId && sqlResult.insertId * 1 > 0 ) {
      result.success = true;
    }
    return result;
  },

  async getExistOne( options ) {
    let _sql = `
    SELECT * from picture_album
      where name="${options.name}" 
      limit 1`;
    let result = await dbUtils.query( _sql );
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
        a.id AS id, 
        a.name AS album_name, 
        a.create_time AS create_time, 
        a.update_time AS update_time, 
        u.name AS user_name 
      FROM 
        picture_album AS a, 
        user_info AS u 
      WHERE 
        u.id = a.user_id
      ORDER BY 
        id DESC
      LIMIT 
        ${options.start}, ${options.end} `;
    let result = await dbUtils.query(sql);
    return result;
  },

  async count() {
    let result = await dbUtils.count('picture_album');
    return result;
  }

};

module.exports = pictureAlbum;

