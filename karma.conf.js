module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/public/angular_files/angular/angular.js',
      'app/public/angular_files/angular-route/angular-route.js',
      'app/public/angular_files/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'test/unit/*.js',
      'app/public/js/*.js',
      'app/public/js/controllers/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }



  });
};
