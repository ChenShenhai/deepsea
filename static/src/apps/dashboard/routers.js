import Main from './/main';

const rootRoute = {
  component: Main,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./../../views/user-super/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'user-super',
      getComponent(location, cb) {
        System.import('./../../views/user-super/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'user-list',
      getComponent(location, cb) {
        System.import('./../../views/user-list/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'user-authority',
      getComponent(location, cb) {
        System.import('./../../views/user-authority/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },


  ]
};

export default rootRoute;