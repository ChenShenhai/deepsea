const userService = require('./../services/user-info');

const userController = {

  async getUserListByPage ( ctx ) {
    let params = ctx.query;
    let userList = await userService.getListByPage(params);
    ctx.body = {
      data: userList,
      success: true,
    };
  },

};

module.exports = userController;