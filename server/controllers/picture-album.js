const pictureAlbumService = require('./../services/picture-album')
const pictureAlbumCode = require('./../codes/picture-album')
const userCode = require('./../codes/user')
const UtilType = require('./../utils/type')
const userInfoController = require('./../controllers/user-info') 

const pictureAlbum = {

  async addAlbum( ctx ) {
    let formData = ctx.request.body;
    let result = {
      success: false,
      message: '',
      data: null,
      code: '',
    } 

    let session = ctx.session
    if( !(session && session.isLogin === true ) ) {
      result.message = userCode.FAIL_USER_NO_LOGIN
      result.code = 'FAIL_USER_NO_LOGIN'
      ctx.body = result 
      return
    }

    let validateResult = pictureAlbumService.validateAblum( formData )
    
    if ( validateResult.success !== true ) {
      ressult.message = validateResult.message
      result.code = validateResult.code
      ctx.body = result 
      return
    } 

    let exitOne = await pictureAlbumService.getExistOne(formData)
    if ( exitOne && exitOne.name === formData.name  ) {
      result.message = pictureAlbumCode.FAIL_PICTURE_ALBUM_NAME_EXIST
      result.code = 'FAIL_PICTURE_ALBUM_NAME_EXIST'
      ctx.body = result
      return
    }

    let createResult = await pictureAlbumService.create({
      name: formData.name,
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

    let data = await pictureAlbumService.getListByPage( queryParams )
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

    
  }
}

module.exports = pictureAlbum

