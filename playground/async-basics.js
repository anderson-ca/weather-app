'use strict';



//Async example.
console.log('Starting program');

setTimeout( () => {
    console.log('this should have a delay');
}, 4000);

// obs: This statement executes at the  finishing up statement. Even though it has a zero millisecond delay.
setTimeout(() => {
    console.log('this should not have a delay');
});

console.log('Finish program');













