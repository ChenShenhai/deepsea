import React from 'react'
import PictureAlbumForm from './../modules/picture-album-form'
import PictureAlbumList from './../modules/picture-album-list'

class Picture extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <div>
        <h2>picture album</h2>
        <PictureAlbumForm />
        <hr/>
        <PictureAlbumList />
      </div>

    )
  }
}

export default Picture