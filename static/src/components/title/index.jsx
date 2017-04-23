import React from 'react';
import './style.less';


class Title extends React.Component {
  render () {
    let { titleText, titleType } = this.props;
    return (
      <div className="comp-title" >
        <h2>{titleText}</h2>
      </div>
    )
  }
}

export default Title;