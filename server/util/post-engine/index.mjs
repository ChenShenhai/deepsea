import rp from 'request-promise'; 
import types from './../types.mjs';

const DEFAULT_LIST_PARAMS = { 
  page: 1, 
  size: 2,
  state: 'open',
  labels: [],
  direction: 'desc',
  creator: ''
  // since: ''
};

const DEFAULT_ITEM_PARAMS = {
  id: 1
};

function request(url, params) {

  console.log(`[github url] ${url}`);
  let qs;
  if ( types.isJSON(params) ) {
    qs = {
      page: params.page,
      per_page: params.size
    };
  }

  let options = {
    uri: url, 
    headers: {
        'User-Agent': 'Request-Promise'
    },
    qs,
    json: true  
  };
  return rp(options);  
}

export default class PostEngine {
  
  constructor( config = {} ) {
    this.config = config;
    this.GITHUB_ISSUE_URL = `https://api.github.com/repos/${config.github}/${config.repository}/issues`;
  }

  getList( params = DEFAULT_LIST_PARAMS ) {
    return request(this.GITHUB_ISSUE_URL, params);
  }

  getItem( params = DEFAULT_ITEM_PARAMS ) {
    const apiGetItem = `${this.GITHUB_ISSUE_URL}/${params.id}`;
    return request(apiGetItem, params);
  }

}