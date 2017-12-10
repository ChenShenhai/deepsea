import PostEngine from './../util/post-engine/index.mjs';
import times from './../util/times.mjs';
import config from './../config/config.dev.mjs';  

const postEngine = new PostEngine(config);

const _PAGE_SIZE_ = 10;

function getTimeIOS ( timeDiff = 0 ) {
  let preDayTimestamp = new Date().getTime() * 1 - timeDiff;
  let preDayIsoStr = new Date(preDayTimestamp).toISOString();
  return preDayIsoStr;
}

async function getUpdatedPosts ( params = { 
  page: 1,
  size: _PAGE_SIZE_,
  sort: 'updated',
  since: getTimeIOS( - 24*60*60*1000 )
}) {  
  let result = await postEngine.getList(params);
  return result;
}



export default {
  getUpdatedPosts
};