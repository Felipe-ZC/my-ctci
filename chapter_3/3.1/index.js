class ThreeStacks {
	constructor(seed = 1) {
		this.arr = new Array(seed * 3).fill(null);
		this.top = [null, null, null];
	}

	resize() {
		let newArr = new Array(this.arr.length * 3).fill(null);
		const segment = newArr.length / 3;

		// Fill first stack...
		let bounds = this.getBounds(1);
		let oldVals = this.arr.slice(bounds[0],bounds[1]);
		for(let i = 0; i < oldVals.length; ++i)  
			newArr[i] = oldVals[i];

		// Fill second stack
		bounds = this.getBounds(2);
		oldVals = this.arr.slice(bounds[0],bounds[1]);
		for(let i = 0; i < oldVals.length; ++i)  
			newArr[i + segment] = oldVals[i];
		
		// Fill third stack
		bounds = this.getBounds(3);
		oldVals = this.arr.slice(bounds[0],bounds[1]);
		for(let i = 0; i < oldVals.length; ++i)  
			newArr[i + (segment*2)] = oldVals[i];

		// Replace current array...
		this.arr = newArr;
	}

	hasEmptySpace(stack) {	
		let bounds = this.getBounds(stack);
		
		if(!bounds)
			 throw "Invalid Stack!";

		return this.arr[bounds[1] - 1] === null;
	}

	getBounds(stack) {	
		const segment = this.arr.length / 3;
		
		switch(stack) {
			case 1: 
				return [0, segment];
			case 2: 
				return [segment, segment * 2];
			case 3: 
				return [segment * 2, this.arr.length];
			default:
				return null;
		}
	}
	
	/*
	 * Find first null value in a given segment, replace
	 * null value found with data. If there are no null
	 * values in a given segment then add more null values
	 * to the end of each segment...
	 * */
	push(stack, data) {
		if(!this.hasEmptySpace(stack))
			this.resize();
		
		let bounds = this.getBounds(stack);
		
		if(!bounds)
			 throw "Invalid Stack!"; 
		
		for(let i = bounds[0]; i < bounds[1]; ++i) 
			if(!this.arr[i]) {
				this.arr[i] = data;
				this.top[stack-1] = data;
				return;
			}
	}
	
	pop(stack) {
		let bounds = this.getBounds(stack);
		
		if(!bounds)
			 throw "Invalid Stack!"; 

		for(let i = bounds[1]-1; i >= bounds[0]; --i) 
			if(this.arr[i] !== null) {
				let val = this.arr[i];
				this.arr[i] = null;
				this.top[stack-1] = this.arr[i-1];
				return val;
			}

		return null;
	}

	peek(stack) {
		return this.top[stack-1];
	}

	printStacks() {
		const segment = this.arr.length / 3;
		console.log("Stacks: ", this.arr);
		console.log("Stack 1: ", this.arr.slice(0, segment));
		console.log("Stack 2: ", this.arr.slice(segment, segment*2));
		console.log("Stack 3: ", this.arr.slice(segment*2, this.arr.length));
	}
}

module.exports = ThreeStacks;
