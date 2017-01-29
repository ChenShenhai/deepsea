const blogContentModel = require('./../models/blog-content')
const blogContentCode = require('./../codes/blog-content')
const UtilDatetime = require('./../utils/datetime')
const UtilType = require('./../utils/type')

const blogContent = {
  async create( blog ) {
    let result = await blogContentModel.create({
      name: blog.name,
      category_id: blog.categoryId,
      content: blog.content,
      user_id: blog.userId,
      create_time: new Date().getTime(),
      update_time: new Date().getTime()
    });
    return result
  },

  validateContent( content ) {
    let result = {
      success: false,
      message: '',
      code: '',
    }

    result.success = true
    return result
  },

  async getListByPage( options ) {
    let start = options.page * 1 > 0 ? ( options.page * 1 - 1 ) * options.size * 1 : 0
    let end = start + options.size * 1
    let resultList = await blogContentModel.getListByPage( { start, end } )
    let resultCount = await blogContentModel.count()

    let parsedResultList = []
    for ( let[ index, item ] of resultList.entries() ) {
      let parseItem = {
        id: item.id,
        name: item.name,
        categoryId: item.category_id,
        categoryName: item.category_name,
        content: item.content,
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
  },

  async getOneById( id ) {
    let result = await blogContentModel.getOneById( id )
    let parsePost
    if ( UtilType.isJSON( result ) && UtilType.isNumber( result.id )) {
      parsePost = {
        id: result.id,
        name: result.name,
        categoryId: result.category_id,
        categoryName: result.category_name,
        content: result.content,
        userName: result.user_name,
        createTime: result.create_time,
        updateTime: result.update_time
      }
    } 
    return parsePost
  },

  async update( options ) {
    let data = {
      name: options.name,
      category_id: options.categoryId,
      content: options.content,
      update_time: new Date().getTime()
    }
    let id = options.id
    let result = await blogContentModel.update( data, id )
    return result
  },
  
}

module.exports = blogContent