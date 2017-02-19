import Request from './../../../utils/request'

export const getUserInfo = async () => {
  let responseData = await Request.get({
    url: '/api/user/getUserInfo.json',
  });
  let userInfo = null;
  if ( responseData.success === true ) {
    userInfo = responseData.data || {}
  }
  return userInfo;
}
