import Main from './../modules/main';
import userRoute from './user';

const rootRoute = {
  component: Main,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./../views/index')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'user',
      getComponent(location, cb) {
        System.import('./../views/user')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
      getChildRoutes(location, cb) {
        System.import('./user')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'blog',
      getComponent(location, cb) {
        System.import('./../views/blog')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
      getChildRoutes(location, cb) {
        System.import('./blog')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'picture',
      getComponent(location, cb) {
        System.import('./../views/picture')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
      getChildRoutes(location, cb) {
        System.import('./picture')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'setting',
      getComponent(location, cb) {
        System.import('./../views/setting')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      }
    },

  ]
};

export default rootRoute;
