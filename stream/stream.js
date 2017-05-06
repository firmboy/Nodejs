'use strict'
var fs = require('fs')

var rs = fs.createReadStream('./stream/test.txt');

rs.on('data',function(chunk){
  console.log(chunk);
})

rs.on('end',function(){
  console.log('end');
})

rs.on('error',function(err){
  console.log('Err'+err);
})

var ws = fs.createWriteStream('./stream/test1.txt');
rs.pipe(ws);
