import React from 'react'
import UtilUpload from './../../../utils/upload'

class Picture extends React.Component {

  async handleUploadImage() {
    let result = await UtilUpload()
    console.log(result)
  }

  render () {
    return (
      <div>
        <h2>picture index</h2>
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