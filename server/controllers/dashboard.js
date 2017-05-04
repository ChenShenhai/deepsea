module.exports = {

  async indexPage ( ctx ) {
    const title = 'dashboard page';
    await ctx.render('dashboard', {
      title,
    });
  },


};