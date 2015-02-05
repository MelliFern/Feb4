'use strict';

var app = exports = module.exports = {}; // jshint ignore:line
var greeting = 'Hello ';

app.hello = function(arg){
	var name = arg||process.argv[2]||'Everyone';
	return (greeting + name);

};
