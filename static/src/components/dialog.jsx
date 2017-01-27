import React from 'react';
import './dialog.scss';

class Dialog extends React.Component {

  constructor() {
    super();

  }

  render() {
    let isVisible = this.props.isVisible || false
    let dialogContent = this.props.content || {}
    let options = this.props.options
    console.log('this.props=', this.props)

    return (

      <div className="rc-dialog-show">
        <div className="modal rc-dialog-container ">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <p>mulit dialog</p>
            </div>
          </div>
        </div>
        <div className="rc-dialog-backdrop"></div>
      </div>
    )
  }
}

export default Dialog
