import React from 'react'
import { Link } from 'react-router'

class BlogSide extends React.Component {
  render () {
    return (
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
         <li className="list-group-item">
          <Link activeClassName="active" to="/picture">picture</Link>
        </li>
      </ul>
    )
  }
}

export default BlogSide