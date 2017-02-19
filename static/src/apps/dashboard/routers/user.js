
const routes = {
  childRoutes: [
    { path: '',
      redirect: 'index',
    },

    {
      path: 'index',
      getComponent(location, cb) {
        System.import('./../views/user-index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },
    {
      path: 'info',
      getComponent(location, cb) {
        System.import('./../views/user-info')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'message',
      getComponent(location, cb) {
        System.import('./../views/user-message')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      }
    },

  ]
};

export default routes;