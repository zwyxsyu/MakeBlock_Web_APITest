module.exports = function(grunt) {
    grunt.initConfig({
      mochaTest: {
        test: {
          options: {
            reporter: 'mochawesome',
            captureFile: 'results.txt',
            quiet: false,
            clearRequireCache: false
          },
          //src: ['test/**/*.js']
          src: ['test/module/supertest.js'],

        }
      }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('default', 'mochaTest');

};
