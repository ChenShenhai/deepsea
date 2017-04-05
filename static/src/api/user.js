import Tools from './../utils/tool';
import Request from './../utils/request';
import validator from 'validator';

const user = {
  async getUserList( params ) {
    params = params || {};
    let result = await Request.get({
      url: '/api/admin/getUserList.json',
      data: {
        pageCurrent: params.pageCurrent || 1
      }
    });
    return result;
  }
};

export default user;