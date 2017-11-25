 

/**
 * Module dependencies.
 */ 
import path from 'path';
import assert from 'assert';
import send from './send.mjs';

const resolve = path.resolve;

const includePathRegexp = [
  /^\/static\/output\//i,
  /^\/themes\/[a-zA-Z\_]+\/dist\//i,
];


function parsePath( thisPath, dirName ) {
  let dirNameStr = `/${dirName}`;
  let parsePath = thisPath;
  if ( dirName && dirName.length > 0 && thisPath.startsWith(dirNameStr) ) {
    parsePath = parsePath.replace( dirNameStr, '' );
  }
  return parsePath;
}


function isIncludeStaticPath( thiPath ) {
  let _isInclude = false;
  for ( let [ index, item ] of includePathRegexp.entries() ) {
    if ( item instanceof RegExp) {
      if ( item.test( thiPath ) ) {
        _isInclude = true;
        break;
      }
    }
  }
  return _isInclude;
}


function serve( root, dirName ) {
  let opts = {};

  assert(root, 'root directory is required to serve files');

  // options
  opts.root = resolve(root);
  if (opts.index !== false) opts.index = opts.index || 'index.html';

  if (!opts.defer) {

    return function *serve(next){
      if ( (this.method == 'HEAD' || this.method == 'GET')
        && isIncludeStaticPath(this.path) === true ) {
        if (yield send(this, parsePath(this.path, dirName), opts)) return;
      }
      yield* next;
    };
  }

  return function *serve(next){
    yield* next;

    if (this.method != 'HEAD' && this.method != 'GET') return;
    // response is already handled
    if (this.body != null || this.status != 404) return;

    if ( isIncludeStaticPath(this.path) === false ) return;

    yield send(this, parsePath(this.path, dirName), opts);
  };
}

 
export default  serve;