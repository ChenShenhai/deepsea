import React from 'react'

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
      <div className="picture-album-container">
        <div className="picture-album-list">
          {
            this.state.albumList.map(( i, item ) => {
              return (
                <div className="card picture-album-item" key={i}>
                  <div className="card-block">
                    <img className="card-img-top album-preview" src="/static/output/asset/image/deepsea-logo.jpg" alt="Card image cap" />
                    <p className="card-text">picture album</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    )
  }
}

export default Picture