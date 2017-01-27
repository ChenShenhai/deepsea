import React from 'react';
import './alert.scss';

class Alert extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  getClassName() {
    let _baseClass = 'alert';
    let _typeClass = 'alert-';
    let _displayClass = 'rc-alert-hide';

    let _type = this.props.alertType || 'info';
    let _context = this.props.alertContext || '';

    if ( typeof _context === 'string' && _context.length > 0 ) {
      _displayClass = 'rc-alert-show';
    }

    return `${_baseClass} ${_typeClass}${_type} ${_displayClass}`;
  }

  render() {
    return (
      <div className={this.getClassName()} >
        {this.props.alertContext}
      </div>
    )
  }
}

export default Alert