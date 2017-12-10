 
const times = {
  getTime ( timeDiff = 0 ) {
    let preDayTimestamp = new Date().getTime() * 1 + timeDiff;
    let preDayIsoStr = new Date(preDayTimestamp).toISOString();
    return preDayIsoStr;
  }
};

export default times;