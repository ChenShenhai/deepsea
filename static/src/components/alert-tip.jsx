import React from 'react'
import ReactDOM from 'react-dom'
import './alert-tip.scss'

class AlertTip extends React.Component {


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

  componentDidMount() {
    this.fadeOut()
  }

  static show( options = { message: '', status: 'info'} ) {
    let div = document.createElement('div')
    let _model = ReactDOM.render(
      <AlertTip  message={options.message} status={options.status}/> ,
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

  fadeOut( ) {
    let _this = this
    setTimeout(()=>{
      _this.handleClose()
    }, 1000)
  }

  render() {
    let {message, status} = this.props
    let statusStype = `alert alert-${status}`
    return (
      <div className="rc-alert-tip-show">
        <div className="modal rc-alert-tip-container ">
          <div className="modal-dialog" >
            <div className="modal-content rc-alert-tip-content">
              <div className={statusStype}>
                {message}
              </div>
            </div>
          </div>
        </div>
        <div className="rc-alert-tip-backdrop"></div>
      </div>
    )
  }
}

export default AlertTip
