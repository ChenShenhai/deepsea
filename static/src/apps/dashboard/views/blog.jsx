import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import UserIndexView from './../modules/user-info-index'
import Dialog from './../../../components/dialog'

class Blog extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  render () {
    let content = this.props.children || <UserIndexView/>;

    return (
      <div>
        <section className="dashboard-container">
          <section className="dashboard-left">
            <ul className="list-group">
              <li className="list-group-item">
                <Link activeClassName="active" to="/blog/post">blog post</Link>
              </li>
              <li className="list-group-item">
                <Link activeClassName="active" to="/blog/list">blog list</Link>
              </li>
              <li className="list-group-item">
                <Link activeClassName="active" to="/blog/category">blog cagegory</Link>
              </li>
            </ul>
          </section>
          <section className="dashboard-main">
            {content}
          </section>
        </section>
      </div>

    )
  }
}


export default Blog
