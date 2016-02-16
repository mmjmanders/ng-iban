'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Measure time it takes for grunt tasks
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      tmp: ['lib'],
      dist: ['dist']
    },

    coffee: {
      src: {
        files: [{
          cwd: 'src',
          src: '**/*.coffee',
          dest: 'lib',
          expand: true,
          ext: '.js'
        }]
      }
    },

    ngAnnotate: {
      dist: {
        files: {
          'dist/ng-iban.min.js': 'dist/ng-iban.js'
        }
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
          'dist/ng-iban.js': 'lib/ng-iban.js'
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
