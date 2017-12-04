import post from './../model/post.mjs';
import types from './../util/types.mjs';

 
export const create = async function( item ) { 
  let result = await post.create(item);
  return result;
};

export const getOneById = async function( id ) {
  let result = await post.getOneById(id);
  return result;
};

export const bulkCreate = async function( list ) { 
  let result = await post.bulkCreate(list);
  return result;
};

export default {
  create,
  getOneById,
  bulkCreate
};