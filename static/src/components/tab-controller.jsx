import React from 'react';
import './tab-controller.scss';

class Tag extends React.Component {

  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  handleTagNavClassName( index ) {
    return index === this.state.activeIndex ?
      'nav-link active' : 'nav-link';
  }

  handleTagContentClassName( index ) {
    return index === this.state.activeIndex ?
      'rc-tag-content active' : 'rc-tag-content';
  }


  render() {

    return (
      <div className="rc-tag-controller">
        <ul className="nav nav-tabs">
          {
            React.Children.map( this.props.children, ( elem, index ) => {
              return (
                <li
                  className="nav-item"
                  onClick={ () => { this.setState({activeIndex: index}) } }>
                  <a
                    className={ this.handleTagNavClassName( index ) }
                    href="javascript:void(0)">
                    { elem.props.name }
                  </a>
                </li>
              )
            })
          }
        </ul>
        <div>
          {
            React.Children.map( this.props.children, ( elem, index ) => {
              return (
                <div className={ this.handleTagContentClassName( index ) }>
                  { elem }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Tag
