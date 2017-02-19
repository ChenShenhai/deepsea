
const routes = {
  childRoutes: [
    { path: '',
      redirect: 'list',
    },

    {
      path: 'list',
      getComponent(location, cb) {
        System.import('./../views/blog-list')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },
    {
      path: 'category',
      getComponent(location, cb) {
        System.import('./../views/blog-category')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      },
    },

    {
      path: 'post',
      getComponent(location, cb) {
        System.import('./../views/blog-post')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      }
    },

    {
      path: 'post/:blogId',
      getComponent(location, cb) {
        System.import('./../views/blog-post')
          .then((module) => cb(null, module.default))
          .catch(( err ) => {
            console.log( err )
          });
      }
    },

  ]
};

export default routes;
