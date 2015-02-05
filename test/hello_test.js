'use strict';

var expect =require('chai').expect; 
var hello = require('../lib/hello.js');

describe('hello2 test', function(){
    it('test Greet no args', function(){
     process.argv[2]=null;
     expect(hello.hello()).to.eql('Hello Everyone');
    });

   it('test Greet with Arg', function(){
     expect(hello.hello('Melissa')).to.eql('Hello Melissa');
    });

   it('Test if process.argv is being processed', function(){
      process.argv[2] = 'Jane Doe';
      expect(hello.hello()).to.eql('Hello Jane Doe');
    });



});
