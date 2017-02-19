import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import UserIndexView from './../modules/user-info-index'
import BlogSide from './../modules/blog-side'


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
            <BlogSide />
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
