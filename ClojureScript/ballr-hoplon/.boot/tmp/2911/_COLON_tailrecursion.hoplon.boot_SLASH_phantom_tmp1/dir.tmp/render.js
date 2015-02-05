
var page = require('webpage').create(),
    sys  = require('system'),
    cwd  = sys.env.PWD,
    path = sys.args[1]
    uri  = "file://" + cwd + "/" + path;

page.open(uri, function(status) {
  setTimeout(function() {
    var html = page.evaluate(function() {
      return document.documentElement.outerHTML;
    });
    console.log(html);
    phantom.exit();
  }, 0);
});