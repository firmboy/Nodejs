var EventEmitter = require("events").EventEmitter;

var event = new EventEmitter();

event.on('some_event',function(){
		console.log("some_event事件发生");
	});

setTimeout(function(){
	event.emit('some_event');
},1000);

console.log("程序开始执行");
