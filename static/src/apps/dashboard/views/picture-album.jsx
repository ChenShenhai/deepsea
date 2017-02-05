import React from 'react'
import UtilUpload from './../../../utils/upload'

class Picture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      albumList: []
    }
  }

  componentDidMount() {
    this.setState({
      albumList: [1,2,3,4,5,6,7,8,9,10]
    })
  }

  render () {
    return (
      <div className="dashboard-picture-album">
        <h2>picture album</h2>
        <div>
          {
            this.state.albumList.map(( i, item ) => {
              return (
                <div className="card picture-album-item" key={i}>
                  <div className="card-block">
                    <img className="card-img-top album-preview" src="/static/output/asset/image/deepsea-logo.jpg" alt="Card image cap" />
                    <h4 className="card-title">Special title treatment</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                  <div className="card-footer text-muted">
                    2 days ago
                  </div>
                </div>
              )
            })
          }
              

        </div>

      </div>
    )
  }
}

export default Picture