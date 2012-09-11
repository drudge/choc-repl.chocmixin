/*!
 * Chocolat REPL mixin for Chocolat
 * Copyright(c) 2012 Nicholas Penree <nick@penree.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var webrepl = require('./lib/node-web-repl');

/**
 * Options.
 */

var options = { host: '127.0.0.1', port: 11911 };

/**
 * Create REPL web server.
 */
 
var server = webrepl.createServer(options);

/**
 * Hook process.exit to prevent quitting Chocolat.
 */

process.exit = function(code) {
  Alert.show('Intercepted request to exit the process with code ' + (code || '0'), '', ['OK']);
  return "Get off my lawn!";
};

/*
 * Hook up menu items.
 */

Hooks.addMenuItem('Window/Chocolat REPL', 'cmd-alt-p', function() {
  var doc = Document.current()
    , win = new Window();
  
  win.title = 'Chocolat REPL';
  win.url = 'http://' + options.host + ':' + options.port;
  win.run();
  
  win.setFrame({x: 0, y: 0, width: 750, height: 550}, false);
  win.center();
});