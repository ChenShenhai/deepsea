module.exports = {

  async indexPage ( ctx ) {
    let session = ctx.session;
    if ( session && session.isLogin === true ) {
      const title = 'work';
      await ctx.render('work', {
        title,
      });
    } else {
      ctx.redirect('/page/404');
    }

  },


};