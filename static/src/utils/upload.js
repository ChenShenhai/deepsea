import UtilType from './type'

function requestEvent( formData ) {
  return new Promise(( resolve, reject ) => {
    try {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 && xhr.status === 200 ) {
          resolve(JSON.parse(xhr.responseText))
        } 
      }
      xhr.open('post', '/api/picture/upload.json')
      xhr.send(formData)
    } catch ( err ) {
      reject({
        success: false
      })
    }
      
  })
}

function emitEvent ( options ){
  let file
  let formData = new FormData()
  let input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('name', 'files')

  input.click()
  input.onchange = function () {
    file = input.files[0]
    formData.append('files', file)
    requestEvent( formData ).then((result)=>{
      if ( result && result.success === true ) {
        options.success( result )
      } else {
        options.fail( result )
      }
    }, (result)=>{
      options.fail( result )
    })
      
  }

}

function upload( options ) {
  if ( !UtilType.isJSON( options ) ) {
    console.log( 'upload options is null' )
    return
  }
  let _options = {}
  _options.success = UtilType.isFunction(options.success) ? options.success : function() {}
  _options.fail = UtilType.isFunction(options.fail) ? options.fail : function() {}
  emitEvent(_options)
}

export default upload