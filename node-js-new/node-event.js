const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('触发事件');
}
);

myEmitter.emit('event');