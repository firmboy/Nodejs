var buf1 = new Buffer("菜鸟教程");

var buf2 = new Buffer("www.runoob.com");

var buf = Buffer.concat([buf1,buf2]);

console.log(buf.toString());