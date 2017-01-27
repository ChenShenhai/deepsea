module.exports = async ( ctx ) => {
  const title = 'api page'

  await ctx.render('index', {
    title
  })
}