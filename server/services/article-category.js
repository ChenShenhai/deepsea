const articleCategoryModel = require('./../models/article-category');
const articleCategoryCode = require('./../codes/article-category');
const UtilDatetime = require('./../utils/datetime');

const articleCategory = {
  async create( category ) {
    let result = await articleCategoryModel.create({
      name: category.name,
      user_id: category.userId,
      create_time: new Date().getTime(),
      update_time: new Date().getTime()
    });
    return result;
  },

  async getExistOne( formData ) {
    let resultData = await articleCategoryModel.getExistOne({
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
      result.code = 'ERROR_ARTICLE_CATEGORY';
      return result;
    }

    if ( !category.name || !category.name.length > 10 ) {
      result.code = 'FAIL_ARTICLE_CATEGORY_NAME_TO_LONG';
      return result;
    }

    result.success = true;
    return result;
  },

  async getListByPage( options ) {
    let start = options.page * 1 > 0 ? ( options.page * 1 - 1 ) * options.size * 1 : 0;
    let end = start + options.size * 1;
    let resultList = await articleCategoryModel.getListByPage( { start, end } );
    let resultCount = await articleCategoryModel.count();
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

module.exports = articleCategory;