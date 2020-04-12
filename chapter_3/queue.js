class Queue {
	
	constructor() {
		this.q = [];
	}
	
	enqueue(data) {
		this.q.unshift(data);
	}

	dequeue() {
		return this.q.shift();
	}

	peek() {
		return this.q[0];
	}
}
