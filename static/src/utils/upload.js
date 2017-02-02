function request( formData ) {
  return new Promise(( resolve, reject ) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        resolve(xhr.responseText)
      } else {
        reject( xhr.responseText )
      }
    }
    xhr.open('post', '/api/picture/upload.json')
    xhr.send(formData)
  })
}

function pkgFormData (){
  return new Promise(( resolve, reject ) => {
    let file
    let formData = new FormData()
    let input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('name', 'files')

    input.click()
    input.onchange = function () {
      file = input.files[0]
      formData.append('files', file)
      resolve(formData)
    }
  }).catch(( err ) => {
    console.log(err)
  })
}

async function upload() {
  let formData = await pkgFormData()
  let result = await request( formData )
  return result
}

export default upload