/*
 * How would you design a stack which, in addition to push and pop, also has a function
 * min which returns the minimum element? Push, pop and min should all operate in
 * O(1) time.
 * */

class MinStack {
	constructor() {
		this.stack = [];
	}
	
	push(val) {
		// If the stack is empty...
		if(this.stack.length <= 0)
			// Push the first number with itself as the minimum...
			this.stack.push({"val" : val, "min" : val});
		else {
			let minVal = this.peek().min;
			
			if(val < minVal)
				minVal = val;

			this.stack.push(val, minVal);
		}
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1].val;
	}

	getMin() {
		return this.stack[this.stack.length - 1].min;
	}
}


class MaxStack {
	constructor() {
		this.stack = [];
	}
	
	push(val) {
		// If the stack is empty...
		if(this.stack.length <= 0)
			// Push the first number with itself as the minimum...
			this.stack.push({"val" : val, "max" : val});
		else {
			let maxVal = this.peek().max;
			
			if(val < maxVal)
				maxVal = val;

			this.stack.push(val, maxVal);
		}
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1].val;
	}

	getMax() {
		return this.stack[this.stack.length - 1].max;
	}
}
