const dbUtil = require('./../utils/db-utils');

const select = async () => {

  // let result = await dbUtil.findDataByPage('data_content', 0,10);
  // let result = await dbUtil.select('data_content', ['id', `content`]);
  let result = await dbUtil.query('select id, json_keys(content) as "keys" from data_content');

  console.log( result );
};

select()
