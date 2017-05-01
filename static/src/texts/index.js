import enTexts from './en/index.js';
import zhcnTexts from './zh-cn/index.js';
import config from '@@config';

let texts = enTexts;

if ( config.language === 'zh-cn' ) {
  texts = {...enTexts, ...zhcnTexts};
}

export default texts;