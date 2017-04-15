var events = require("events");

var EventEmitter = new events.EventEmitter();

var listren1 = function listren1(){
	console.log("listren1执行");
}

var listren2 = function listren2(){
	console.log("listren2执行");
}
EventEmitter.addListener('some_event',listren1);

EventEmitter.on('some_event',listren2);

var count = require("events").EventEmitter.listenerCount(EventEmitter,"some_event");

console.log(count+"个监听器监听");

EventEmitter.emit('some_event');

EventEmitter.removeListener('some_event', listren1);

var count2 = require("events").EventEmitter.listenerCount(EventEmitter,"some_event");

console.log(count2+"个监听器监听");

EventEmitter.emit('some_event');

console.log("程序结束");
