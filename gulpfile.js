'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util')
const webpack = require('webpack')

gulp.task('webpack', function (callback) {
  var config = require('./webpack.config.js')
  webpack(config, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({}))

    callback()
  })
})
