import types from './types.mjs';



class PostParser {

  constructor( config ){
    this.config = config;
    this._GITHUB_ISSUE_BASE_HTML_URL_ = `https://github.com/${config.github}/${config.repository}/issues`; 
    
  }

  validateItem( item ) {
    const config = this.config; 
    if ( !types.isJSON(item) ) {
      return false;
    }  

    if ( item.state !== 'open' ) {
      return false;
    }
    if ( item.user.login !== config.github ) {
      return false;
    } 
    if ( item.html_url.indexOf(this._GITHUB_ISSUE_BASE_HTML_URL_) < 0) {
      return false;
    }
    return true;
  }  


  parseItem( item ) {
    if ( !this.validateItem(item) ) {
      return null;
    }
    let postItem = {};
    
    postItem.postId = item.number;
    postItem.title = item.number;
    postItem.content = item.body;
    postItem.labels = [];
    for( let[_index, _val] of item.labels.entries() ) {
      postItem.labels.push({
        name: _val.name,
        color: _val.color,
        default: _val.default
      });
    }
    postItem.updatedAt = new Date(item.updated_at).getTime();
    postItem.createdAt = new Date(item.created_at).getTime();
    postItem.commentCount = item.comments;
    postItem.userName = item.user.login;
    postItem.userAvatar = item.avatar_url;

    postItem.extention = {
      github: {
        issue: item.number,
        issueUrl: item.html_url,
        issueCommentsUrl: item.comments_url,
      }
    };
    return postItem;
  }

  parseList( list ) {
    if ( !types.isArray(list) ) {
      return null;
    }
    let postList = [];
    for ( let [_index, _val] of list.entries() ) {
      let _postItem = this.parseItem( _val );
      postList.push(_postItem);
    }
    return postList;
  }

}

export default PostParser;