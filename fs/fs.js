'use strict'

var fs = require("fs")

//异步读取文件
fs.readFile('./fs/test.txt',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data.toString('utf-8'));
  }
});

//同步读取文件
try {
  var data = fs.readFileSync('./fs/test.txt');
  console.log(data.toString('utf-8'));
} catch (e) {
  console.log(e);
} finally {

}
