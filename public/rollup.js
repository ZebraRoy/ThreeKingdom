/* eslint-disable no-console*/
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');

rollup
  .rollup({
    entry: 'src/index',
    plugins: [babel()]
  })
  .then(function (bundle) {
    bundle.write({
      dest: 'dist/bundle.js',
      format: 'iife'
    })
  })
  .catch(function (e) {
    console.log(e);
  });

rollup
  .rollup({
    entry: 'src/index',
    plugins: [babel(), uglify()]
  })
  .then(function (bundle) {
    bundle.write({
      dest: 'dist/bundle.min.js',
      format: 'iife'
    })
  })
  .catch(function (e) {
    console.log(e);
  });
