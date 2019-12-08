module.exports.function = function getCurrentPosition (point) {
  return {
    myPos:{
    longitude:point.longitude,
    latitude:point.latitude
  }
  };
}
