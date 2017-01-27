import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

class Model extends React.Component {


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
  }

  static show( options = { title: '', message: '' }) {
    let div = document.createElement('div')
    let _title = options.title
    let _message = options.message
    let _model = ReactDOM.render(
      <Model title={options.title} message={options.message} /> ,
      div)
    let dom = document.querySelector('body').appendChild(div)
    _model._container = div
    _model._dom = dom
    return _model._promise
  }

  handleClose() {
    this._reject('modal close')
    ReactDOM.unmountComponentAtNode( this._container )
    this._dom.remove()
  }

  handleConfirm() {
    this._resolve('modal confirm')
    ReactDOM.unmountComponentAtNode( this._container )
    this._dom.remove( )
  }

  render() {
    let { title, message } = this.props;
    return (
      <div className="rc-modal-show">
        <div className="modal rc-modal-container ">
          <div className="modal-dialog" >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close rc-modal-close-btn"
                  onClick={this.handleClose.bind(this)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary mr-2"
                  onClick={this.handleConfirm.bind(this)}>
                  确定
                </button>
                <button type="button" className="btn btn-secondary"
                  onClick={this.handleClose.bind(this)}>
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rc-modal-backdrop"></div>
      </div>
    )
  }
}

export default Model
