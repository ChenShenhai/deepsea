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

async function request(url, params) {

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
    this._postParser = new PostParser(config);
    this.GITHUB_ISSUE_URL = `https://api.github.com/repos/${config.github}/${config.repository}/issues`;
  }

  async getList( params = DEFAULT_LIST_PARAMS ) {
    let result = await request(this.GITHUB_ISSUE_URL, params);
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