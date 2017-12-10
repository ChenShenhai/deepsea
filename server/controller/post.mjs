import marked from 'marked';
import Heighlight from 'highlight.js';
import PostEngine from './../util/post-engine/index.mjs';
import config from './../config/config.dev.mjs';
import post from './../service/post.mjs';

marked.setOptions({
  highlight: function (code, lang) {
    return Heighlight.highlightAuto(code).value;
  },
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const postEngine = new PostEngine(config);

export const postList = async function (params) {
  return postEngine.getList(params);
};

export const postItem = async function (params) {
  return postEngine.getItem(params);
};

export const getOneById = async function(id) {
  let result = await post.getOneById(id);
  return result;
};  

export const getListByPage = async function( params ) {
  let result = await post.getListByPage(params);
  return result;
};
 
export const renderPostItem = async function(ctx) {
  let data = await postItem(ctx.params); 
  await ctx.render('post/item', {
    content: marked(data.content),
    title: data.title
  });
};