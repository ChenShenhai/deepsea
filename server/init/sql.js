

const fs = require('fs');
const getSqlContentMap = require("./utils/get-sql-content-map");
const dbUtil = require("./../utils/db-util");


const eventLog = function( err, sqlFile ) {
  if( err) {
    console.log("[ERROR] database" + "--[table]" + sqlFile + "-- create failed ！" );
    console.log( err );
  } else {
    console.log("[SUCCESS] database" + "--[table]" + sqlFile + "-- create successfully !" );
  }
};


let sqlContentMap = getSqlContentMap();

// console.log( sqlContentMap );

const createAllTables = async () => {
  for( let key in sqlContentMap ) {
    let result = await dbUtil.createTable( sqlContentMap[key] );
    console.log(result);
  }
}

createAllTables();
