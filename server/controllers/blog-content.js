const blogContentService = require('./../services/blog-content')
const blogContentCode = require('./../codes/blog-content')
const userCode = require('./../codes/user')
const UtilType = require('./../utils/type')
const userInfoController = require('./../controllers/user-info') 
let resultTpl = {
  success: false,
  message: '',
  data: null,
  code: '',
} 

const blogContent = {
  async addContent( ctx ) {
    let formData = ctx.request.body
    let result = Object.assign(resultTpl)

    let session = ctx.session
    if( !(session && session.isLogin === true ) ) {
      result.message = userCode.FAIL_USER_NO_LOGIN
      result.code = 'FAIL_USER_NO_LOGIN'
      ctx.body = result 
      return
    }

    let createResult = await blogContentService.create({
      name: formData.name,
      categoryId: formData.categoryId,
      content: formData.content,
      userId: session.userId
    }) 
    if ( createResult && createResult.success === true ) {
      result.success = true 
    }

    ctx.body = result
  },


  async getListByPage( ctx ) {
    let query = ctx.query
    let queryParams = {
      page: query.page,
      size: query.size || '10',
    }

    let result = userInfoController.validateLogin( ctx )
    if ( result.success === false ) {
      ctx.body = result
      return
    }

    let data = await blogContentService.getListByPage( queryParams )
    if ( data 
      && UtilType.isArray( data.list ) 
      && UtilType.isNumber( data.pageCount * 1 ) 
      && UtilType.isNumber( data.currentPage * 1) ) {
      result.data = data
      result.success = true
      ctx.body = result
      return
    } else {
      result.success = false
      ctx.body = result
      return
    }
  },

  async getOneById( ctx ) {
    let query = ctx.query
    let id = query.id * 1
    let result = Object.assign(resultTpl)
    if ( !UtilType.isNumber(id) ) {
      ctx.body = result
      return
    }
    let resultBlog = await blogContentService.getOneById( id )
    if ( UtilType.isJSON( resultBlog ) ) {
      result.data = resultBlog
      result.success = true
    }
    ctx.body = result
  },

  async updateContent( ctx ) {
    let formData = ctx.request.body
    let result = Object.assign(resultTpl)

    let session = ctx.session
    if( !(session && session.isLogin === true ) ) {
      result.message = userCode.FAIL_USER_NO_LOGIN
      result.code = 'FAIL_USER_NO_LOGIN'
      ctx.body = result 
      return
    }

    let updateResult = await blogContentService.update({
      id: formData.id,
      name: formData.name,
      categoryId: formData.categoryId,
      content: formData.content,
      userId: session.userId
    }) 
    if ( updateResult && updateResult.success === true ) {
      result.success = true 
    }

    ctx.body = result
  }
}

module.exports = blogContent



