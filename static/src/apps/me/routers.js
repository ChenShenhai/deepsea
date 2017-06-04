import Main from './/main';

const rootRoute = {
  component: Main,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./../../views/my-info/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err );
          });
      },
    },

    {
      path: 'my-info',
      getComponent(location, cb) {
        System.import('./../../views/my-info/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err );
          });
      },
    },

    {
      path: 'my-password',
      getComponent(location, cb) {
        System.import('./../../views/my-password/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err );
          });
      },
    },

    {
      path: 'my-authority',
      getComponent(location, cb) {
        System.import('./../../views/my-authority/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err );
          });
      },
    },


  ]
};

export default rootRoute;