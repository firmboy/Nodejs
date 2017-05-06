'use strict'
const Koa = require('koa');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
var fs = require("fs");

const app = new Koa();

function addMapping(router,mapping){
  for(var url in mapping){
    if(url.startsWith('GET ')){
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    }else if(url.startsWith('POST ')){
      var path = url.substring(5);
      router.post(path,mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    }else{
      console.log(`invalid URL: ${url}`);
    }
  }
}

function addController(router){
  var files = fs.readdirSync(__dirname+'/controllers');

  var js_files = files.filter((f) =>{
    return f.endsWith('.js');
  });

  for(var f of js_files){
    console.log(`process controller:${f}...`);
    let mapping = require(__dirname+'/controllers/'+f);
    addMapping(router,mapping);
  }

}

addController(router);

app.use(bodyparser());

app.use(router.routes());

app.listen(3000);

console.log('server run at 3000');
