import rp from 'request-promise'; 
import types from './lib/types.mjs';
import PostParser from './lib/parser.mjs';

const DEFAULT_LIST_PARAMS = { 
  page: 1, 
  size: 10,
  state: 'open',
  labels: [],
  direction: 'desc',
  creator: ''
  // since: ''
};

const DEFAULT_ITEM_PARAMS = {
  id: 1
};


function parseRequestUrl ( url, params ) {
  let _params = Object.assign(params);
  _params.per_page = params.size || params.per_page;
  let queryStr = '';
  let queryList = [];
  let _parsedUrl = '';
  for ( let _key in _params) {
    if ( _params[_key] ) {
      queryList.push(`${_key}=${_params[_key]}`);
    }
  }
  queryStr = queryList.join('&');
  
  if ( url.indexOf('?') > 0 ) {
    _parsedUrl = `${url}&${queryStr}`;
  } else {
    _parsedUrl = `${url}?${queryStr}`;
  }
  return _parsedUrl;
}

async function request(url, params) {

  url = parseRequestUrl(url, params);
  // TODO
  console.log(`[github url] ${url}`);  

  // let qs; 
  let options = {
    uri: url, 
    headers: {
        'User-Agent': 'Request-Promise'
    },
    // qs,
    json: true  
  };
  return rp(options);  
}

export default class PostEngine {
  
  constructor( config = {} ) {
    this.config = config; 
    this._postParser = new PostParser(config);
    this.GITHUB_ISSUE_URL = `https://api.github.com/repos/${config.github}/${config.repository}/issues`;
  }

  async getList( params = {} ) {
    let result = await request(this.GITHUB_ISSUE_URL, {...DEFAULT_LIST_PARAMS, ...params});
    let list = this._postParser.parseList(result);
    return list;
  }

  async getItem( params = DEFAULT_ITEM_PARAMS ) {
    const apiGetItem = `${this.GITHUB_ISSUE_URL}/${params.id}`;
    let result = await request(apiGetItem, params);
    let item = this._postParser.parseItem(result);
    return item;
  }

}