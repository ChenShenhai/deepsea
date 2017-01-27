const send = require('./../middlewares/send');

// module.exports = async ( ctx ) => {
//   return send(ctx, '/themes/blog/dist/index.html')
// }

module.exports = async ( ctx ) => {
  const title = 'koa2 title'
  await ctx.render('index', {
    title
  })
}