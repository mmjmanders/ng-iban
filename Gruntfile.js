'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Measure time it takes for grunt tasks
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      tmp: ['.tmp'],
      dist: ['dist']
    },

    coffee: {
      src: {
        files: [{
          cwd: 'src',
          src: '**/*.coffee',
          dest: '.tmp',
          expand: true,
          ext: '.js'
        }]
      },
      test: {
        files: [{
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          expand: true,
          ext: '.js'
        }]
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          cwd: '.tmp',
          src: '*.js',
          dest: 'dist',
          expand: true
        }]
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/ng-iban.min.js': 'dist/ng-iban.js'
        }
      }
    },

    browserify: {
      dist: {
        options: {
          transform: ['debowerify']
        },
        files: {
          '.tmp/ng-iban.js': '.tmp/ng-iban.js'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.coffee',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'clean:tmp',
    'coffee',
    'browserify',
    'karma'
  ]);

  grunt.registerTask('default', [
    'clean:dist',
    'test',
    'ngAnnotate',
    'uglify'
  ]);
};
