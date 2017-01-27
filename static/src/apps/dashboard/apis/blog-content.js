import Request from './../../../utils/request'

export const getBlogContentList = async ( options ) => {
  let responseData = await Request.get({
    url: '/api/blogContent/getList.json',
    data: options
  })
  return responseData
}

export const getOneById = async ( options ) => {
  let responseData = await Request.get({
    url: '/api/blogContent/getOneById.json',
    data: options
  })
  return responseData
}