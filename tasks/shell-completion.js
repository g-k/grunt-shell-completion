/*
 * grunt-shell-completion
 * https://github.com/g-k/grunt-shell-completion
 *
 * Copyright (c) 2012 Greg Guthe
 * Licensed under the MIT license.
 */
var fs = require('fs');
var path = require('path');


module.exports = function(grunt) {
  'use strict';

  var _ = grunt.utils._;

  grunt.registerTask(
    'list', "List registered tasks for commandline completion.", function () {
      grunt.log.write(_.keys(grunt.task._tasks).join(' '));
    }
  );

  grunt.registerTask('grunt-shell-completion',
    "Snippet to append to profile for grunt zsh completion.", function () {
      var filename = path.join(__dirname, 'shell-completion.sh'); 
      grunt.log.write(fs.readFileSync(filename, 'utf8'));
    }
  );

};
