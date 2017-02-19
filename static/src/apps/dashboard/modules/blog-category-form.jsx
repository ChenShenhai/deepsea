import React from 'react'
import Request from './../../../utils/request'
import AlertTip from './../../../components/alert-tip'
import blogCategoryText from './../../../texts/blog-category'
import commonText from './../../../texts/common'

class BlogCategoryForm extends React.Component {

  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  async handleAddCategory() {

    if ( !this.state.name || this.state.name.length <= 0 ) {
      AlertTip.show({ message: blogCategoryText.BLOG_CATEGORY_FAIL_NAME_NULL, status: 'danger' })
      return
    }

    if ( this.state.name.length > 10 ) {
      AlertTip.show({ message: blogCategoryText.BLOG_CATEGORY_FAIL_NAME_TO_LONG, status: 'danger' })
      return
    }


    let result = await Request.post({
      url: '/api/blogCategory/add.json',
      data: {
        name: this.state.name
      }
    })
    if ( result && result.success === true ) {
      AlertTip.show({ message: blogCategoryText.BLOG_CATEGORY_SUCCESS_ADD, status: 'success' })
      this.setState({
        name: ''
      })
    } else {
      AlertTip.show({ message: result.message, status: 'danger' })
    }

  }

  handleInputName( event ) {
    this.setState({
      name: event.target.value
    })
  }


  render() {
    return (
      <div className="dashboard-blog-category">
        <div className="dashboard-blog-category-form">
          <div className="form-group">
            <label htmlFor="inputBlogName">{blogCategoryText.BLOG_CATEGORY_LABEL_NAME}</label>
            <input type="text" className="form-control dashboard-blog-category-input"
              ref="inputBlogCategoryName"
              placeholder={blogCategoryText.BLOG_CATEGORY_PLACEHOLDER_NAME}
              value={this.state.name}
              onChange={this.handleInputName.bind(this)} />
            <button type="submit" className="btn btn-secondary"
              onClick={this.handleAddCategory.bind(this)}>
              {commonText.BTN_SUBMIT_NAME}
            </button>
            <br/>
          </div>
        </div>
      </div>

    )
  }
};

export default BlogCategoryForm
