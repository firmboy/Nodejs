'use strict'
var fs = require('fs');

var s = '今天天气好晴朗啊！处处好风光';

//异步写文件
fs.writeFile('./fs/test1.txt',s,function(err){
  console.log(err);
});

//同步写文件
fs.writeFileSync('./fs/test1.txt',s);
