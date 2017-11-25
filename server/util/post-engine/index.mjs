import rp from 'request-promise'; 

export default class PostEngine {
  
  constructor( config = {} ) {
    this.config = config;
    this.GITHUB_ISSUE_URL = `https://api.github.com/repos/${config.github}/${config.repository}/issues`;
  }

  request( params = { page: 1, size: 2}) {
    var options = {
      uri: this.GITHUB_ISSUE_URL, 
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

  postList( params ) {
    return this.request();
  }

}