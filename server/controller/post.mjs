import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.mjs';

const postEngine = new PostEngine(config);

export const postList = async function (params) {
  return postEngine.postList(params);
};