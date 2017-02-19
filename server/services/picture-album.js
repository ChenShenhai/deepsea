const pictureAlbumModel = require('./../models/picture-album')
const pictureAlbumCode = require('./../codes/picture-album')
const UtilDatetime = require('./../utils/datetime')

const pictureAlbum = {

  async create( album ) {
    let result = await pictureAlbumModel.create({
      name: album.name,
      user_id: album.userId,
      create_time: new Date().getTime(),
      update_time: new Date().getTime()
    });
    return result
  },

  async getExistOne( formData ) {
    let resultData = await pictureAlbumModel.getExistOne({
      'name': formData.name,
    });
    return resultData;
  },

  validateAblum( album ) {
    let result = {
      success: false,
      message: '',
      code: '',
    }
    if ( !album ) {
      result.message = pictureAlbumCodedatetime.ERROR_PICTURE_ALNUM
      result.code = 'ERROR_PICTURE_ALNUM'
      return result
    }

    if ( !album.name || !album.name.length > 10 ) {
      result.message = pictureAlbumCode.FAIL_PICTURE_ALNUM_NAME_TOO_LONG
      result.code = 'FAIL_PICTURE_ALNUM_NAME_TO_LONG'
      return result
    }

    result.success = true
    return result
  },

  async getListByPage( options ) {
    let start = options.page * 1 > 0 ? ( options.page * 1 - 1 ) * options.size * 1 : 0
    let end = start + options.size * 1
    let resultList = await pictureAlbumModel.getListByPage( { start, end } )
    let resultCount = await pictureAlbumModel.count()
    let parsedResultList = []

    for ( let[ index, item ] of resultList.entries() ) {
      let parseItem = {
        id: item.id,
        albumName: item.album_name,
        userName: item.user_name,
        createTime: item.create_time,
        updateTime: item.update_time
      }
      parsedResultList.push(parseItem)
    }

    let result = {
      list: parsedResultList,
      pageCount: Math.ceil( resultCount[0].total_count * 1 / (options.size * 1) ) + '',
      currentPage: options.page || '1'
    }

    return result
  }
}

module.exports = pictureAlbum