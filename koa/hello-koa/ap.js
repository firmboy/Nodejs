'use strict';

const Koa = require('koa');

const app = new Koa();

app.use((ctx,next) => {
    ctx.body = 'Hello Koa';
    console.log("访问");
});
app.listen(3000);
console.log("app started at port 3000");
