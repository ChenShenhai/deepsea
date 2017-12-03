export default function( len ) {
  const timeStamp = new Date().getTime().toString(36);
  const randomStr1 = Math.random().toString(36).substr(2, 8);
  const randomStr2 = Math.random().toString(36).substr(2, 8);
  let str = timeStamp + randomStr1 + randomStr2;
  if ( len >= 0 && len <= 24 ) {
    return str.substr(0, len * 1);
  } else {
    return str
  }
}