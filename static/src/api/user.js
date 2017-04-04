import Tools from './../utils/tool';
import Request from './../utils/request';
import validator from 'validator';

const user = {
  async getUserList( pageCurrent ) {
    let result = await Request.get({
      url: '/api/admin/getUserList.json',
      data: {
        pageCurrent: pageCurrent || 1
      }
    });
    return result;
  }
};

export default user;