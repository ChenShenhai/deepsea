import React from 'react'
import ReactDOM from 'react-dom'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'
import UtilTool from './../../../utils/tool'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js'
import RichEditor from './../../../components/rich-editor/index'
import { getBlogCategoryList } from './../apis/blog-category'
import Request from './../../../utils/request'
import AlertTip from './../../../components/alert-tip'

class BlogContentForm extends React.Component {
  constructor(props) { 
    super(props)

    let blogId = props.params.blogId || ''
    this.state = {
      blogId: blogId,
      editorState: EditorState.createEmpty(),
      name: '',
      categoryId: '',
      categoryList: []
    }
  }

  async initEditPostData( ) {
    if ( !(this.state.blogId * 1 > 0) ) {
      return
    }
    

  }

  async componentWillMount() {
    let categoryResult = await getBlogCategoryList()
    this.setState({
      categoryList: categoryResult.data.list
    })
  }

  async componentDidMount() {
    
  }

  async handleGetEditorData() {
    let ctxStore = this.state.editorState.getCurrentContent()
    let contentHtml = stateToHTML(ctxStore)
    let data = {
      name: this.state.name,
      categoryId: this.state.categoryId,
      content: contentHtml
    }

    if ( this.validateData(data) === false ) {
      return
    }

    let result = await Request.post({
      url: 'api/blogContent/add.json',
      data: data
    })

    if ( result && result.success === true ) {
      AlertTip.show({ message: '发布成功', status: 'success' })
      window.location.hash = '/blog/list'
    } else {
      AlertTip.show({ message: result.message, status: 'danger' })
    }
  }

  validateData( data ) {
    let validateResult = true
    let errorMessage = ''

    if ( !data ) {
      validateResult = false
      errorMessage = '数据填写不完整'
    }
    
    if ( !(data.name && data.name.length > 0) ) {
      validateResult = false
      errorMessage = '文章题目不能为空'
    } else if ( !(data.categoryId && data.categoryId * 1 > 0) ) {
      validateResult = false
      errorMessage = '请选择文章类别'
    } else if ( !(data.content &&  data.content.length > 0) ) {
      validateResult = false
      errorMessage = '文章内容不能为空'
    }

    if ( validateResult === false ) {
      AlertTip.show({ message: errorMessage, status: 'danger' })
    }
    return validateResult
  }


  handleEditorStateChange( editorState ) {
    this.setState({
      editorState: editorState
    })
  }

  handleNameChange( event ) {
    this.setState({
      name: event.target.value
    })
  }

  handleCategoryChange( event ) {
    this.setState({
      categoryId: event.target.value
    })
  }
 
  render() {
    return (
        
      <div className="dashboard-blog-post">
        
        <h3>发布文章</h3>
        <hr/>
        <div className="dashboard-blog-post-form">
          <div className="form-group">
            <label htmlFor="inputBlogName">文章名称</label>
            <input type="text" className="form-control dashboard-blog-category-input"
              ref="inputBlogCategoryName"
              placeholder=""
              onChange={this.handleNameChange.bind(this)} />
          </div>

          <div className="form-group">
            <label htmlFor="">文章类别</label>
            <select className="form-control"
              onChange={this.handleCategoryChange.bind(this)} >
              <option value="">请选择类别</option>
              {
                this.state.categoryList.map((item, i)=>{
                  return (
                    <option value={item.id} key={i}>
                      {item.categoryName}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <p>文章内容</p>
        <RichEditor
          editorState={this.state.editorState}
          editorStateChangeCallback={this.handleEditorStateChange.bind(this)}
          onChange={
            ( event ) => {
              console.log( event )
            }
          }/>

        <br/>
        <button 
          className="btn btn-secondary"
          onClick={this.handleGetEditorData.bind(this)}> 
          发布文章
        </button>
      </div>
    );
  }
}

export default BlogContentForm
