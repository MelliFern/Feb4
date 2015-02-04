'use strict'

var greet = require('./lib/hello.js');

console.log(greet.hello(process.argv[2]));
