import config from './../../config/config.mjs';
import rp from 'request-promise';


const GITHUB_ISSUE_URL = 
  `https://api.github.com/repos/${config.github}/${config.repository}/issues`;


function request( params = { page: 1, size: 2}) {
  

  var options = {
    uri: GITHUB_ISSUE_URL, 
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

export default {
  async postList( params ) {
    return request();
  }
};