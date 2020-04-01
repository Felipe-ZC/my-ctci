/*
 * Implement an algorithm to find the nth to last element of a singly linked list.
 * */

const Node = require('../node.js');

function makeList() {
	let counter = 2;
	let head = new Node(1);
	let node = head;

	while(counter < 10) { 
		node.next = new Node(counter);
		node = node.next;
		counter += 1;
	}

	return head;
}

function printList(head) {
	let node = head;	
	while(node) {
		console.log(node.data.toString());
		node = node.next; 
	}
}

/*
 * Solution 1: Iterate through the whole list to get its length,
 * then iterate one more time to get the nthFromLast node.
 * If asked this question in a real interview, your interviewer 
 * will more than likely not accept this answer. 
 *
 * Try and solve it using the two pointers technique! 
 *
 * Time: O(n)
 * Space: O(1)
 * */

function getNthFromLast(n, head) {
	let node = head;
	let counter = 0;
	
	/*
	 * NOTE: Careful when deciding the exit condition here.
	 * while(node.next) means we wont count the last node,
	 * while(node) means we will count the last node.
	 *
	 * Check with your interviewer what they mean by the end
	 * of the list, is it the tail node? Or is it the null node
	 * after the tail node?
	 * */
	while(node.next) {
		++counter;
		node = node.next;
	}

	node = head;
	for(let i = 0; i < (counter - n); ++i)
		node = node.next;

	return node;
}


/*
 * Solution 2: The last node is the tail node, not the null node at the end of the list.
 * 1 -> 2 -> 3 -> 4 -> null -----> 4 is the last node in the list
 *	
 *
 * Time: O(n)
 * Space: O(1)
 * */
function getNthFromLastV2(n, head) {
	let slow = head;
	let fast = head;
	
	for(let i = 0; i < n; ++i)
		fast = fast.next;

	while(fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}

/*
 * Solution 1: The last node is the null node at the end of the list, not the tail.
 * 1 -> 2 -> 3 -> 4 -> null -----> null is the last node in the list
 * */
function getNthFromLastV3(n, head) {
	let slow = head;
	let fast = head;
	
	for(let i = 0; i < n; ++i)
		fast = fast.next;

	while(fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}

let n = process.argv.slice(2)[0];
printList(makeList());
console.log(`\n${n}th item from the end of the list:`)
console.log(getNthFromLastV3(n, makeList()));
