# grunt-shell-completion

Grunt tasks for zsh completion.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-shell-completion`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-shell-completion');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Adds `grunt grunt-shell-completion` to print a snippet:

```
~/grunt-shell-completion » grunt grunt-shell-completion
Running "grunt-shell-completion" task
# completion for grunt
function grunt_tasks {
    reply=(`grunt --no-color list`)
}
compctl -K grunt_tasks grunt

Done, without errors.
```

And `grunt list` to list available commands (if a `grunt.js` file is available):

```
~/grunt-shell-completion » grunt list
Running "list" task
concat init lint min qunit server test watch list grunt-shell-completion default
Done, without errors.
```

If the completion snippet is loaded with your `.zshrc` file, we can
tab complete grunt commands. For example:

```
~/grunt-shell-completion » grunt grunt-shell-completion | tail +2 | head -5 >> ~/.zshrc
~/grunt-shell-completion » source ~/.zshrc
~/grunt-shell-completion » grunt^TAB
\"list\"                concat                  grunt-shell-completion  list                    server                  watch
Done,                   default                 init                    min                     task                    without
Running                 errors.                 lint                    qunit                   test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

## TODO

* Push upstream to get a grunt quiet mode (remove Done and running lines)
* Add completion for dashed grunt options
* Support bash and other shells

## License
Copyright (c) 2012 Greg Guthe
Licensed under the MIT license.
