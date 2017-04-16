var buf1 = new Buffer("ABC");

var buf2 = new Buffer("ABCD");

var buf = buf1.compare(buf2);

if(buf<0){
	console.log(buf1.toString()+"在"+buf2.toString()+"之前");
}else if(buf == 0){
	console.log(buf1.toString()+"与"+buf2.toString()+"相同");
}else {
	console.log(buf1.toString()+"在"+buf2.toString()+"之后");
}

var buf1 = new Buffer("ABC");

var buf2 = new Buffer("ABCD");

var buf = buf1.compare(buf2);

if(buf<0){
		console.log(buf1.toString()+"在"+buf2.toString()+"之前");
}else if (buf==0) {
	console.log(buf1.toString()+"和"+buf2.toString()+"相同");
}else{
	console.log(buf1.toString()+"在"+buf2.toString()+"之后");
}
