import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.dev.mjs';
import { getOneById as getOnePostById} from './../service/post.mjs';

const postEngine = new PostEngine(config);

export const postList = async function (params) {
  return postEngine.getList(params);
};

export const postItem = async function (params) {
  return postEngine.getItem(params);
};

export const getOneById = async function(id) {
  let result = await getOnePostById(id);
  return result;
};  

 