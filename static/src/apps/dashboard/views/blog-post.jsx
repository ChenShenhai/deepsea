import React from 'react'
import ReactDOM from 'react-dom'
import BlogContentForm from './../modules/blog-content-form'


class BlogPost extends React.Component {
  constructor(props) { 
    super(props)
  }
 
  render() {
    return (
        
      <div>
        <BlogContentForm params={this.props.params} />
      </div>
    );
  }
}

export default BlogPost
