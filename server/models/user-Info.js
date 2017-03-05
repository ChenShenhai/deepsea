const dbUtils = require('./../utils/db-util');
const user = {

  async create ( model ) {
    let result = await dbUtils.insertData( 'user_info', model );
    return result;
  },

  async getAllUser(  ) {
    let result = await dbUtils.query( `SELECT name from user_info limit 0, 10` );
    return result;
  },

  async getExistOne(options ) {
    let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`;
    let result = await dbUtils.query( _sql );
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },

  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and name="${options.name}"
      limit 1`;
    let result = await dbUtils.query( _sql );
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },

  async getUserInfoByUserName( userName ) {

    let result = await dbUtils.select(
      'user_info',
      ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time' ]);
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },



};


module.exports = user;
