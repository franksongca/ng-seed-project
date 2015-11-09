// Karma configuration
// Generated on Tue Aug 11 2015 15:22:39 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'client/bower_components/jquery/dist/jquery.js',
        'client/bower_components/angular/angular.min.js',
        'client/bower_components/angular-ui-router/release/angular-ui-router.js',
        'client/bower_components/angular-resource/angular-resource.js',
        'client/bower_components/angular-cookies/angular-cookies.js',
        'client/bower_components/angular-slick/dist/slick.min.js',
        'client/bower_components/slick-carousel/slick/slick.js',
        'client/bower_components/d3/d3.js',
        'client/bower_components/c3/c3.js',
        'client/bower_components/angular-translate/angular-translate.js',
        'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'client/bower_components/lodash/lodash.min.js',
        'client/bower_components/moment/moment.js',
        'client/bower_components/angular-elastic/elastic.js',
        'client/bower_components/json3/lib/json3.js',
        'client/bower_components/angular-sanitize/angular-sanitize.js',
        'client/bower_components/angular-file-upload/angular-file-upload.js',
        'client/bower_components/angularjs-modal-service/src/createDialog.js',
        'client/bower_components/bootstrap/dist/js/bootstrap.js',
        'client/bower_components/angular-facebook/lib/angular-facebook.js',
        'client/bower_components/twitter-text/js/twitter-text.js',
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/app/*.js',
        'client/app/**/**/*.js',
        'client/test/*.js',
        'client/test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
