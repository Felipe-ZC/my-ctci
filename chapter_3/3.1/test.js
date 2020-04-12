const stax = require('./index.js');

stacks = new stax(2);

console.log("----- Push -----");
stacks.push(1,1);
stacks.push(1,2);
stacks.push(1,3);

stacks.push(2,4);
stacks.push(2,5);
stacks.push(2,6);

stacks.push(3,7);
stacks.push(3,8);
stacks.push(3,9);

console.log("----- Resize -----");
stacks.printStacks();

stacks.push(1,10);
stacks.push(1,10);
stacks.push(1,10);
stacks.push(1,10);
stacks.push(1,10);
stacks.push(1,10);
stacks.push(1,10);

console.log("----- Resize -----");
stacks.printStacks();


console.log("----- Peek -----");
console.log(stacks.peek(1));
console.log(stacks.peek(2));
console.log(stacks.peek(3));

console.log("----- Pop -----");
console.log(stacks.pop(1));
console.log(stacks.pop(2));
console.log(stacks.pop(3));

console.log("----- Resize -----");
stacks.printStacks();

console.log("----- Peek -----");
console.log(stacks.peek(1));
console.log(stacks.peek(2));
console.log(stacks.peek(3));

//console.log("----- Pop -----");
//console.log(stacks.pop(1));
//console.log(stacks.pop(2));
//console.log(stacks.pop(3));

//console.log("----- Peek -----");
//console.log(stacks.peek(1));
//console.log(stacks.peek(2));
//console.log(stacks.peek(3));

//console.log("----- Pop -----");
//console.log(stacks.pop(1));
//console.log(stacks.pop(2));
//console.log(stacks.pop(3));

//console.log("----- Peek -----");
//console.log(stacks.peek(1));
//console.log(stacks.peek(2));
//console.log(stacks.peek(3));

//console.log("----- Pop -----");
//console.log(stacks.pop(1));
//console.log(stacks.pop(2));
//console.log(stacks.pop(3));

//stacks.printStacks();
