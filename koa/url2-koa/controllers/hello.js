'use strict'

var fn_hello = async (ctx,next) => {
  var name = ctx.params.name;
  console.log("hehe");
  ctx.response.body = `<h1>hello ,${name}</h1>` ;
};

module.exports={
  'GET /hello/:name':fn_hello
}
