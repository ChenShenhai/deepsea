import React from 'react'

class Picture extends React.Component {
  render () {
    return (
      <div>
        <h2>picture index</h2>
        <form method="POST" encType="multipart/form-data" action="/api/picture/upload.json">
          <input type="text" name="textfield" /><br />
          <input type="file" name="filefield" /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Picture