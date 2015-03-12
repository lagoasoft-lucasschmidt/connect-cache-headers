// http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
module.exports = function(age, private, additionalDirectives) {
  private = typeof private !== 'undefined' ? private : true;
  additionalDirectives = typeof additionalDirectives !== 'undefined' ? additionalDirectives : [];

  var directives = [];
  directives.push((private) ? 'private' : 'public');
  directives.push("max-age=" + age);
  for (var i = 0; i < additionalDirectives.length; i++) {
    directives.push(additionalDirectives[i]);
  }
  return function(req, res, next) {
    res.setHeader("Cache-Control", directives.join(', '));
    res.removeHeader("Pragma");
    res.removeHeader("Expires");
    return next();
  };
};
