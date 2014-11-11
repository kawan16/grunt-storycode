/*
 * grunt-storycode
 * https://github.com/kawan16/grunt-storycode
 *
 * Copyright (c) 2014 Karl Devooght
 * Licensed under the MIT license.
 */

'use strict';

var Storycode = require('storycode/storycode'),
    path = require('path')

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('storycode', 'Grunt plugin for Storycode ( Use Case Tracker )', function() {




        // Iterate over all specified file groups.
        this.files.forEach(function(f) {

            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                else {
                    return true;
                }
            });

            Storycode().process( src , "./report/output");
            grunt.log.writeln('File output.json created.');
            grunt.log.writeln(f.dest);

            var reportFolderNames = ['js','css','fonts' ];
            reportFolderNames.forEach( function( name ) {
                grunt.file.expand( { filter: 'isFile'},'./tasks/report/' + name + '/*').forEach( function( reportFile ) {
                    grunt.file.copy( reportFile , './temp/' + name + '/' + reportFile.split('/').pop() );
                });
            });

            grunt.file.expand( { filter: 'isFile'},'./tasks/report/*').forEach( function( reportFile ) {
                grunt.file.copy( reportFile , './temp/' + reportFile.split('/').pop() );
            });

            var destPath = f.dest.split('/');
            destPath.pop();
            console.log( destPath.join('/') );


            // Write the destination file.



        });
  });

};
