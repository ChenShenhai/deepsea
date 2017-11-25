import PostEngine from './../utils/post-engine/index.mjs';



export const postList = async function (params) {
  return PostEngine.postList(params);
};