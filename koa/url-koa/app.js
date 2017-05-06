'use strict'

const Koa = require("koa");

const router = require('koa-router')();

const app = new Koa();

const bodyparser = require('koa-bodyparser');

app.use(async (ctx,next) => {
  console.log(`process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get('/hello/:name',async(ctx,next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>hello ,${name}</h1>` ;

});

router.get('/',async(ctx,next) =>{
  ctx.response.body = `<h1>Index</h1>
  <form action="/signin" method="post">
    <p>Name:<input name="name" value="koa" /></p>
    <p>Password:<input name="password" type="password"/></p>
    <p><input type="submit" value="Submit"/></p>
  </form>`;
});

router.post('/signin',async(ctx,next) =>{
  var name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin within name:${name} ,password:${password}`);
  if(name === 'koa' && password === '12345'){
    ctx.response.body = `Wlecome ${name}`;
  }else{
    ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="/">Try again</a></p>`;
  }
});

router.get('/home',async(ctx,next) => {
  ctx.response.body = '<h1>Index</h1>';
});



app.use(bodyparser());

app.use(router.routes());

app.listen(3000);
console.log("server run at 3000");
