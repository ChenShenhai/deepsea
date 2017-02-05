
const routes = {
  childRoutes: [
    { path: '',
      redirect: 'album',
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

    {
      path: 'album',
      getComponent(location, cb) {
        System.import('./../views/picture-album')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

  ]
};

export default routes;
