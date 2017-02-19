import React from 'react'
import UtilUpload from './../../../utils/upload'

class Picture extends React.Component {

  handleUploadImage() {
    UtilUpload({
      success: function( result ) {
        console.log('success', result)
      },
      fail: function( result ) {
        console.log('fail', result)
      },
      progress: function( per ) {
        console.log('progress', per)
      }
    })
    
  }

  render () {
    return (
      <div>
        <h2>picture index view</h2>
        <form method="POST" encType="multipart/form-data" action="/api/picture/upload.json">
          <input type="text" name="textfield" /><br />
          <input type="file" name="filefield" /><br />
          <input type="submit" />
        </form>
        <hr/>
        <button 
          onClick={this.handleUploadImage.bind(this)} >
          upload event
        </button>
      </div>
    )
  }
}

export default Picture