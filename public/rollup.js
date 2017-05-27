/* eslint-disable no-console*/
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var path = require('path');



module.exports = function Builder (isProduction, cb) {
  const pluginResolve = nodeResolve({
    jsnext: true,
    main: true
  });
  const pluginCommonjs = commonjs({
    include: path.join(__dirname, 'vendor', '**')
  });
  const plugins = isProduction ? [pluginResolve, pluginCommonjs, babel(), uglify()] : [pluginResolve, pluginCommonjs, babel()];
  const dest = isProduction ? path.join(__dirname, 'dist', 'bundle.min.js') : path.join(__dirname, 'dist', 'bundle.js');
  let cache;
  return {
    run: function run () {
      rollup
        .rollup({
          entry: path.join(__dirname, 'src', 'index'),
          cache: cache,
          plugins: plugins
        })
        .then(function (bundle) {
          cache = bundle;
          bundle.write({
            dest,
            format: 'iife'
          });
          if (cb) {
            cb();
          }
        })
        .catch(function (e) {
          console.log('Build Error: ', e);
        });
    }
  };
}
