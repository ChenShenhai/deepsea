const fs = require('fs');

const walkFile = function(  pathResolve , mime ){

  let files = fs.readdirSync( pathResolve );

  let fileList = {};

  for( let i=0, len=files.length; i<len; i++ ) {
    let item = files[i];
    let itemArr = item.split("\.");

    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : "undefined";
    let keyName = files[i] + "";
    if( mime === itemMime ) {
      fileList[ files[i] ] =  pathResolve + files[i];
    }
  }

  return fileList;
}

module.exports = walkFile;
