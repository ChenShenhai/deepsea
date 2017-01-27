const dbUtil = require('./../utils/db-utils');

const insertDataContent = async () => {
  let jsonContent = JSON.stringify({
    str:'hello word',
    map: { a:'a1', b:'b1' },
    list: ['a', 'b'],
  });
  // let time = new Date().getTime() + '';
  let time = '2017-01-01 00:00:01';
  console.log(time)

  let values = {
    type_id: '001',
    content: jsonContent,
    create_time: time,
    update_time: time,
    creator_id: 123
  };
  let result = await dbUtil.insertData('data_content', values)
  console.log( result );
};

insertDataContent()
