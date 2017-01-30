const inspect = require('util').inspect
const path = require('path')
const os = require('os')
const fs = require('fs')
const Busboy = require('busboy')

const pictureController = { 

  async upload( ctx ) {
    let req = ctx.req
    let res = ctx.res
    if (req.method === 'POST') { 
      // console.log( req )

      let busboy = new Busboy({headers: req.headers})

      busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        console.log('File-file [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype)
        var _uploadFilePath = path.join(__dirname, './../../static/output/upload/' + new Date().getTime() + '.jpg' )
        console.log(_uploadFilePath)
        var saveTo = path.join(_uploadFilePath)
        file.pipe(fs.createWriteStream(saveTo))

        file.on('data', function(data) {
          console.log('File-data [' + fieldname + '] got ' + data.length + ' bytes')
        })
        file.on('end', function() {
          console.log('File-end [' + fieldname + '] Finished')
        })
      })
      busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        console.log('Field-field [' + fieldname + ']: value: ' + inspect(val))
      })
      busboy.on('finish', function() {
        console.log('Done parsing form!')
        // res.writeHead(303, { Connection: 'close', Location: '/' })
        // res.end()
        ctx.body = {
          success: true
        }
      })
      req.pipe(busboy)

    } else {
      ctx.redirect('/dashboard#/picture')
    }
    

    
  },


}

module.exports = pictureController