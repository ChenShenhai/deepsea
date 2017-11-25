import rp from 'request-promise'; 

const DEFAULT_PARAMS = { 
  page: 1, 
  size: 2,
  state: 'open',
  labels: [],
  direction: 'desc',
  creator: ''
  // since: ''
};

function request(url, params = DEFAULT_PARAMS) {
  var options = {
    uri: url, 
    headers: {
        'User-Agent': 'Request-Promise'
    },
    qs: {
      page: params.page,
      per_page: params.size
    },
    json: true  
  };
  return rp(options);  
}

export default class PostEngine {
  
  constructor( config = {} ) {
    this.config = config;
    this.GITHUB_ISSUE_URL = `https://api.github.com/repos/${config.github}/${config.repository}/issues`;
  }

  getList( params ) {
    return request(this.GITHUB_ISSUE_URL, params);
  }

}