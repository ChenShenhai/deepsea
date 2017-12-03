import { create as createPost, getOneById as getOnePostById } from './../model/post.mjs';
import types from './../util/types.mjs';
 
export const create = async function( post ) {
  if ( types.isArray(post.labels) ) {
    post.labels = JSON.stringify(post.labels);
  }
  if ( types.isJSON(post.extention) ) {
    post.extention = JSON.stringify(post.extention);
  }
  let result = await createPost(post);
  return result;
};

export const getOneById = async function( id ) {
  let result = await getOnePostById(id);
  return result;
};

export default {
  create,
  getOneById
};