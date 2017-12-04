import post from './../model/post.mjs';
import types from './../util/types.mjs';
 
export const create = async function( post ) {
  if ( types.isArray(post.labels) ) {
    post.labels = JSON.stringify(post.labels);
  }
  if ( types.isJSON(post.extention) ) {
    post.extention = JSON.stringify(post.extention);
  }
  let result = await post.create(post);
  return result;
};

export const getOneById = async function( id ) {
  let result = await post.getOneById(id);
  return result;
};

export const bulkCreate = async function( list ) {
  let result = await post.bulkCreate(list);
  return result;
}

export default {
  create,
  getOneById,
  bulkCreate
};