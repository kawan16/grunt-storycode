# grunt-storycode

> Grunt plugin for Storycode ( Use Case Tracker for Javascript Code )

For more information about Storycode, please go [here](https://github.com/kawan16/storycode)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-storycode --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-storycode');
```

## The "storycode" task

The task will extract all the `storycode` annotated comments and generate a html report the use cases and the way they are completed through your code. 

### Overview
In your project's Gruntfile, add a section named `storycode` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  storycode: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.dest
Type: `String`
Default value: `'./temp'`

A string value that represents the folder path into which the report will be installed.

## Release History

v0.0.1 : Initial commit
v0.0.2 : Add Use Case Abstract annotation 
