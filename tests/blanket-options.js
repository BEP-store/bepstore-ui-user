/* globals blanket, module */
/* jscs:disable */

var options = {
  modulePrefix: 'bepstore-user',
  filter: '//.*(dummy|bepstore-user)/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    lcovOptions: {
      outputFile: 'lcov.info',
      renamer: function(moduleName) {
        var expression = /^bepstore-user/;
        return moduleName.replace(expression, 'app') + '.js';
      }
    },
    reporters: ['lcov'],
    autostart: true
  }
};

if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
