module.exports = {

  async indexPage ( ctx ) {
    let session = ctx.session;
    if ( session && session.isLogin === true ) {
      const title = 'dashboard page';
      await ctx.render('dashboard', {
        title,
      })
    } else {
      ctx.redirect('/page/404')
    }

  },


}