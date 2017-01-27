import React from 'react'
import blogCategoryText from './../../../texts/blog-category'
import commonText from './../../../texts/common'
import Request from './../../../utils/request'
import { getBlogCategoryList } from './../apis/blog-category'
import UtilDatetime from './../../../utils/datetime'
import UtilPageNav from './../../../utils/page-nav'

class BlogCategoryList extends React.Component {

  constructor() {
    super()
    this.state = {
      categoryList: [],
      pageList: [],
      currentPage: 1,
      pageSize: 10
    }
  }

  componentWillMount() {
    this.handleList()
  }

  async handleList( page = 1 ) {
    let cateResult = await getBlogCategoryList({ page, size: this.state.pageSize })
    if ( cateResult && cateResult.success === true ) {
      let pageList = UtilPageNav( cateResult.data.pageCount, cateResult.data.currentPage, 10 )
      this.setState({
        categoryList: cateResult.data.list || [],
        pageList: pageList,
        currentPage: cateResult.data.currentPage * 1
      })
    }
  }

  handleClickPageNav( page ) {
    this.handleList( page )
    document.body.scrollTop = 0
  }
 
  render() {
    return (
      <div>
        <p className="p3">{blogCategoryText.BLOG_CATEGORY_LABEL_LIST}</p>
        <table className="table">
          <thead>
            <tr>
              <th>类别名称</th>
              <th>创建者</th>
              <th>创建时间</th>
              <th>最后修改时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.categoryList.map( ( item , i)=>{
                return (
                  <tr key={i}>
                    <td>{ item.categoryName }</td>
                    <td>{ item.userName }</td>
                    <td>{ UtilDatetime.parseStampToFormat(item.createTime) }</td>
                    <td>{ UtilDatetime.parseStampToFormat(item.updateTime) }</td>
                    <td>#</td>
                  </tr>
                )
              })
            }            
          </tbody>
        </table>

        <nav>
          <ul className="pagination">
            { 
              this.state.pageList.map(( item, i )=>{
                
                let _currentPage = this.state.currentPage

                let pageItemStyle = 'page-item'
                if ( item * 1 === _currentPage * 1 ) {
                  pageItemStyle = `${pageItemStyle} active`
                }
                return (
                  <li className={pageItemStyle} key={i}
                    onClick={ ()=> { this.handleClickPageNav( item ) }} >
                    <a className="page-link" href="javascript:void(0)">
                      {item}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
};

export default BlogCategoryList
