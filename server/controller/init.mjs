import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.dev.mjs';
import post from './../service/post.mjs';

const postEngine = new PostEngine(config);

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