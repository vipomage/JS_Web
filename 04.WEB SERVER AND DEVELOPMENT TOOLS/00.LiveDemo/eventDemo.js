const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('fireAlarm',(data)=>{
  process.nextTick(()=> console.log('The roof is on fire!'))
});

module.exports = emitter;

emitter.emit('fireAlarm');

