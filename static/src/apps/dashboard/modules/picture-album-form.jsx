import React from 'react'

class PictureAlbumForm extends React.Component {
  
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="picture-ablum-container">
        <div className="picture-ablum-form">
          <div className="form-group">
            <label htmlFor="inputAlbumName">相册名称</label>
            <input type="text" className="form-control" 
              placeholder=""
              value="" />
            <br/>
            <button type="submit" className="btn btn-secondary" >
              添加新相册
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default PictureAlbumForm