import send from './../middlewares/send.mjs';

// module.exports = async ( ctx ) => {
//   return send(ctx, '/themes/blog/dist/index.html')
// }

export default async ( ctx ) => {
  const title = 'koa2 title';
  await ctx.render('index', {
    title
  });
};