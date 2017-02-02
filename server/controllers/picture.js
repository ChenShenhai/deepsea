const inspect = require('util').inspect
const path = require('path')
const os = require('os')
const fs = require('fs')
const Busboy = require('busboy')


function uploadEvent( ctx ) {
  let req = ctx.req
  let res = ctx.res

  let busboy = new Busboy({headers: req.headers})

  return new Promise((resolve, reject) => {
    let result = { 
      success: false,
      code: '',
      message: '',
      data: null
    }

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File-file [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype)
      let _uploadFilePath = path.join(__dirname, './../../static/output/upload/' + new Date().getTime() + '.jpg' )
      console.log(_uploadFilePath)
      
      let saveTo = path.join(_uploadFilePath)
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
      result.success = true
      resolve(result)
    })

    busboy.on('error', function(err) {
      console.log('File-error')
      reject(result)
    })

    req.pipe(busboy)
  })

    
} 

const pictureController = { 

  async upload( ctx ) {
    let result = await uploadEvent( ctx )
    ctx.body = result
  },


}

module.exports = pictureController