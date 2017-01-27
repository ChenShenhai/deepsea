import React from 'react'
import ReactDOM from 'react-dom'
import './loading-progress.scss'

class LoadingProgress extends React.Component {


  constructor() {
    super()
    this._container = null
    this._dom = null
    this._resolve = () => {}
    this._reject = () => {}
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
    this._timer
    this.state = {
      progress: 0
    }

  }

  componentDidMount() {
    this.compluteProgress()
  }

  static show( ) {
    let div = document.createElement('div')
    let _model = ReactDOM.render(
      <LoadingProgress /> ,
      div)
    let dom = document.querySelector('body').appendChild(div)
    _model._container = div
    _model._dom = dom
    return _model._promise
  }

  handleClose() {
    ReactDOM.unmountComponentAtNode( this._container )
    this._dom.remove()
  }

  compluteProgress() {
    this._timer = setInterval(()=> {
      if ( this.state.progress < 99 ) {
        let _progress = this.state.progress + 2
        this.setState({
          progress: _progress
        })
      } else {
        clearInterval(this._timer)
        this.handleClose()
      }
    }, 10)
  }

  render() {


    return (
      <div className="rc-progress-show">
        <div className="modal rc-progress-container ">
          <div className="modal-dialog" >
            <div className="modal-content rc-progress-content">
              <div className="progress">
                <div className="progress-bar" style={{width: `${this.state.progress}%`}} >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rc-modal-backdrop"></div>
      </div>
    )
  }
}

export default LoadingProgress
