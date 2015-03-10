module.exports = function(age, private) {
  var cacheType = "public";
  if (private){
    cacheType = "private";
  }
  var control = cacheType + ", max-age=" + age;
  return function(req, res, next) {
    res.setHeader("Cache-Control", control);
    res.removeHeader("Pragma");
    res.removeHeader("Expires");
    return next();
  };
};
