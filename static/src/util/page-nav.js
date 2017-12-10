/*
  //普通使用方法
  // totalPageNum 总页数, currentPageNum 当前页数, showNumRange 页码个数
  let list = MyFrontApp.pagingNum( totalPageNum, currentPageNum, showNumRange )
  console.log(list)
*/

let PageNavNum = {

  /*
   * 设置参数
   * */
  options : {
    'totalPageNum' : 0,

    'currentPageNum' : 0,

    'showNumRange' : 0
  },

  /*
   * 清空参数
   * @name  cleanOptions
   * */
  cleanOptions : function(){

    this.options.totalPageNum = 0;
    this.options.currentPageNum = 0;
    this.options.showNumRange = 0;
  },

  /*
   * 初始化参数
   * @name  initOptions
   * */
  initOptions : function( totalPageNum,currentPageNum, showNumRange  ){

    this.options.totalPageNum = totalPageNum;
    this.options.currentPageNum = currentPageNum;
    this.options.showNumRange = showNumRange;
  },

  /*
   * 计算页码
   * @ name   calculatePageNumList
   * @ return {Array} 页码列表
   * */
  calculatePageNumList : function() {

    let _options = this.options;

    let _totalPageNum = _options.totalPageNum;
    let _currentPageNum = _options.currentPageNum;
    let _showNumRange = _options.showNumRange;

    if( _totalPageNum === 0 || _currentPageNum === 0 || _showNumRange === 0 ) {
      return false;
    }

    if( _currentPageNum > _totalPageNum ){
      return false;
    }

    let midNum = Math.ceil( _showNumRange / 2 );
    let pageNumList = [];
    let startNum = 0;
    let endNum = 0;

    //总页数小于等于显示页面个数
    if( _totalPageNum <= _showNumRange ) {
      startNum = 1;
      endNum = _totalPageNum;
    }
    //总页数大于于显示页面个数
    else {

      //当前页在总页数前面部分
      if( _currentPageNum <= midNum ) {
        startNum = 1;
        endNum = _showNumRange;
      }
      //当前页在总页数后面部分
      else if( _currentPageNum >= (_totalPageNum - (midNum - 1)) ) {
        startNum = _totalPageNum - 2*(midNum - 1);
        endNum = _totalPageNum;
      }
      //当前页码居中
      else {
        startNum =_currentPageNum - (midNum - 1);
        endNum = _currentPageNum + (midNum - 1);
      }
    }

    for( let i=startNum; i<=endNum; i++ ) {
      pageNumList.push(i);
    }

    //清空参数
    this.cleanOptions();

    return pageNumList;
  }
};

function pagingNum(totalPageNum, currentPageNum, showNumRange) {
  PageNavNum.initOptions( totalPageNum, currentPageNum, showNumRange );
  return PageNavNum.calculatePageNumList();
}

export default pagingNum;