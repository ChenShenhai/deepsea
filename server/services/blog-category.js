const blogCategoryModel = require('./../models/blog-category');
const blogCategoryCode = require('./../codes/blog-category');
const UtilDatetime = require('./../utils/datetime');

const blogCategory = {
  async create( category ) {
    let result = await blogCategoryModel.create({
      name: category.name,
      user_id: category.userId,
      create_time: new Date().getTime(),
      update_time: new Date().getTime()
    });
    return result;
  },

  async getExistOne( formData ) {
    let resultData = await blogCategoryModel.getExistOne({
      'name': formData.name,
    });
    return resultData;
  },

  validateCategory( category ) {
    let result = {
      success: false,
      message: '',
      code: '',
    };
    if ( !category ) {
      result.message = blogCategory.ERROR_BLOG_CATEGORY;
      result.code = 'ERROR_BLOG_CATEGORY';
      return result;
    }

    if ( !category.name || !category.name.length > 10 ) {
      result.message = blogCategory.FAIL_BLOG_CATEGORY_NAME_TO_LONG;
      result.code = 'FAIL_BLOG_CATEGORY_NAME_TO_LONG';
      return result;
    }

    result.success = true;
    return result;
  },

  async getListByPage( options ) {
    let start = options.page * 1 > 0 ? ( options.page * 1 - 1 ) * options.size * 1 : 0;
    let end = start + options.size * 1;
    let resultList = await blogCategoryModel.getListByPage( { start, end } );
    let resultCount = await blogCategoryModel.count();
    let parsedResultList = [];

    for ( let[ index, item ] of resultList.entries() ) {
      let parseItem = {
        id: item.id,
        categoryName: item.category_name,
        userName: item.user_name,
        createTime: item.create_time,
        updateTime: item.update_time
      };
      parsedResultList.push(parseItem);
    }

    let result = {
      list: parsedResultList,
      pageCount: Math.ceil( resultCount[0].total_count * 1 / (options.size * 1) ) + '',
      currentPage: options.page || '1'
    };

    return result;
  }
};

module.exports = blogCategory;