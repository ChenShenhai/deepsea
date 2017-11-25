
export default async ( ctx ) => {
  const title = 'koa2 title';
  
  await ctx.render('index', {
    title
  });
};