import schedule from 'node-schedule';
import PostEngine from './../util/post-engine/index.mjs';
import times from './../util/times.mjs';
import config from './../config/config.dev.mjs';
import post from './../service/post.mjs';
import engine from './../service/engine.mjs';

const postEngine = new PostEngine(config);
const _TIME_DIFF_ = - 10 * 24 * 60 * 60 * 1000 ;

export const initPostList = async function( params ) {
  let postList = await postEngine.getList(params);
  let result = await post.bulkCreate(postList);
  return result;
};

export const initPost = async function(params) {
  let postItem = await postEngine.getItem(params);
  let result = await post.create(postItem);
  return result;
};

export const reset = async function()  { 
  let page = 1;
  let j = schedule.scheduleJob('*/10 * * * * *', async function(){ 
    let since = times.getTime(_TIME_DIFF_);
    let params = {
      size: 10,
      sort: 'updated',
      page,
      since,
    };
    let result = await engine.getUpdatedPosts(params); 
    console.log(result);
    page ++;
  });
};