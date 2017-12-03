import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.dev.mjs';
import { create as createPost } from './../service/post.mjs';

const postEngine = new PostEngine(config);

export const initAllPost = async function() {

};

export const initPost = async function(params) {
  let postItem = await postEngine.getItem(params);
  let result = await createPost(postItem);
  return result;
};