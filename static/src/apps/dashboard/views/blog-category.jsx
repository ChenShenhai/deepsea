import React from 'react'
import BlogCategoryForm from './../modules/blog-category-form'
import BlogCategoryList from './../modules/blog-category-list'

class BlogCategory extends React.Component {
  render () {
    return (
      <div>
        <BlogCategoryForm />
        <BlogCategoryList />
      </div>
    )
  }
}

export default BlogCategory;
