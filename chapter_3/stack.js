class Stack {
	constructor() {
		this.s = [];
	}

	push(data) {
		this.s.push(data);
	}

	pop() {
		return this.s.pop();
	}

	peek() {
		return this.s[this.s.length - 1];
	}
}

module.exports = Stack;
