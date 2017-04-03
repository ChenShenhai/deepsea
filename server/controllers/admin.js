const userService = require('./../services/user-info');

const userController = {

  async getUserListByPage ( ctx ) {
    let userList = await userService.getListByPage({});
    ctx.body = {
      data: userList,
      success: true,
    }
  },

};

module.exports = userController;