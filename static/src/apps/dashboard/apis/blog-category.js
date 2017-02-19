import Request from './../../../utils/request'

export const getBlogCategoryList = async ( options ) => {
  let responseData = await Request.get({
    url: '/api/blogCategory/getList.json',
    data: options
  })
  return responseData
}