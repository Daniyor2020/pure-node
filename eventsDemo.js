import {EventEmitter} from 'events';

const emitter = new EventEmitter();

function greetHandler(name) {
    console.log(`Hello ${name}`);
}

function goodbyeHandler(name) {
    console.log(`Goodbye ${name}`);
}

emitter.on('greet', greetHandler);
emitter.on('goodbye', goodbyeHandler);

emitter.emit('greet', 'Daniyor');
emitter.emit('goodbye', 'Daniyor');

emiiter.on('error', (err) => {
    console.log(err);
});

emitter.emit('error', new Error('Something went wrong'));

emitter.removeListener('error', (err) => {
    console.log(err);
});

emitter.emit('error', new Error('Something went wrong'));