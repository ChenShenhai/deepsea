import mysql from 'mysql';
import config from './../../server/config/config.mysql.mjs';

const pool = mysql.createPool({
  host     :  config.host,
  user     :  config.username,
  password :  config.password,
  database :  config.database
});

let _query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err );
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err );
          } else {
            resolve( rows );
          }
          connection.release();
        });
      }
    });
  });

};


export const query = _query;