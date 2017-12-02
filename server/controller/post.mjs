import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.dev.mjs';

const postEngine = new PostEngine(config);

export const postList = async function (params) {
  return postEngine.getList(params);
};

export const postItem = async function (params) {
  return postEngine.getItem(params);
};