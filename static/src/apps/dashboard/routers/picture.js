
const routes = {
  childRoutes: [
    { path: '',
      redirect: 'index',
    },

    {
      path: 'index',
      getComponent(location, cb) {
        System.import('./../views/picture-index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

  ]
};

export default routes;
