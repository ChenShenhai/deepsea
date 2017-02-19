import React from 'react'
import Request from './../../../utils/request'

class PictureAlbumForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      albumName: ''
    }
  }

  handlerInpurAlbumName( event ) {
    this.setState({
      albumName: event.target.value
    })
  }

  async handlerAddAlbum() {
    let name = this.state.albumName
    let result = await Request.post({ 
      url: '/api/picture/addAlbum.json',
      data: {
        name,
      }
    })
    console.log( result )
  }

  render() {
    return (
      <div className="picture-ablum-container">
        <div className="picture-ablum-form">
          <div className="form-group">
            <label htmlFor="inputAlbumName">相册名称</label>
            <input type="text" className="form-control" 
              placeholder=""
              onChange={this.handlerInpurAlbumName.bind(this)}
              value={this.state.albumName} />
            <br/>
            <button 
              onClick={this.handlerAddAlbum.bind(this)}
              className="btn btn-secondary" >
              添加新相册
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default PictureAlbumForm