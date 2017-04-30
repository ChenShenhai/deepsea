const cryptUtil = {
    

  easyEncrypt( str ) {
    let cryptCodeList = [];
    for ( let i = 0, len = str.length; i<len; i++) {
      cryptCodeList.push( str.charCodeAt(i) );
    }
    let cryptCodeStr = cryptCodeList.join('.');
    return cryptCodeStr;
  },

  easyDecrypt() {
    
  }

}; 