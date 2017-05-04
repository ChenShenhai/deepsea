module.exports = {

  async indexPage ( ctx ) {
    const title = 'work';
    await ctx.render('work', {
      title,
    });
  },


};