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

    connect: {
      options: {
        port: grunt.option('port') || 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              )
            ];
          }
        }
      }
    },

    coffee: {
      options: {
        bare: true
      },
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
      options: {
        singleQuotes: true
      },
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

    karma: {
      unit: {
        configFile: 'test/karma.conf.coffee',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'clean',
    'coffee',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    'test',
    'ngAnnotate',
    'uglify'
  ]);
}
