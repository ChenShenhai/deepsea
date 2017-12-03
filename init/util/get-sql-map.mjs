import fs from 'fs';
import path from 'path';
import process from 'process';
import walkFile from './walk-file.mjs'; 

/**
 * 获取sql目录下的文件目录数据
 * @return {object} 
 */
function getSqlMap () {
  let processPath = process.cwd();
  let basePath = path.join(processPath, 'init/sql/'); 
  let fileList = walkFile( basePath, 'sql' );
  return fileList;
}

export default getSqlMap;