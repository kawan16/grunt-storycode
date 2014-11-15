/*
 * grunt-storycode
 * https://github.com/kawan16/grunt-storycode
 *
 * Copyright (c) 2014 Karl Devooght
 * Licensed under the MIT license.
 */

'use strict';

var Storycode = require('storycode/storycode'),
    path = require('path');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('storycode', 'Grunt plugin for Storycode ( Use Case Tracker )', function() {

        grunt.log.subhead('Storycode Go !');

        var dest = this.options().dest || './temp';

        // Iterate over all specified file groups.
        this.files.forEach(function( f ) {

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

            // Process storycode
            Storycode().process( src , "./report");
            grunt.log.ok('Source files have been successfully scanned (1/2)');

            var reportFolderNames = ['js','css','fonts' ];
            reportFolderNames.forEach( function( name ) {
                grunt.file.expand( { filter: 'isFile'},'./report/' + name + '/*').forEach( function( reportFile ) {
                    grunt.file.copy( reportFile , dest + '/' + name + '/' + reportFile.split('/').pop() );
                });
            });

            grunt.file.expand( { filter: 'isFile'},'./report/*').forEach( function( reportFile ) {
                grunt.file.copy( reportFile , dest + '/' + reportFile.split('/').pop() );
            });

            grunt.log.ok('Use case Report has been successfully generated in ' + dest + ' (2/2)');
        });
    });

};
