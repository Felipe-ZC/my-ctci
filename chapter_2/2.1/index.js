/*
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 * */
const Node = require('../node.js');

function makeList() {
	let counter = 0;
	let head = new Node(0);
	let node = head;

	while(counter < 20) {
		if(counter % 2 === 0) {
			node.next = new Node(counter);
			node.next.next = new Node(counter);
			node = node.next.next;
		}
		else { 
			node.next = new Node(counter);
			node = node.next;
		}
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
 * Constant: Compare each element with every other element in the list, 
 * if a duplicate is found, remove that element. 
 * Time: O(n^2)
 * Space: O(1)
 * */
function removeDupsConstantSpace(head) {
	let node = head;
	
	while(node) {
		let prev = node;
		let nextNode = node.next;
		
		while(nextNode) {
			// If a duplicate element is found...
			if(nextNode.data === node.data) {
				// Remove duplicate element...
				prev.next = prev.next ? prev.next.next : null;
				nextNode = prev.next;
			} else {
				prev = nextNode;
				nextNode = nextNode.next;
			}
		};

		node = node.next;
	};
	
	return head;
}

/*
 * Linear space: Place each value in a hash map and while itearting through
 * the list, check if we have already seen this value. If we have already
 * encountered a value, remove its node. 
 * Time: O(n)
 * Space: O(n)
 * */
function removeDupsLinearSpace(head) {
	let node = head;
	let buff = {};
	let prev = null;

	while(node) {
		if(buff[node.data]) {
				prev.next = prev.next ? prev.next.next : null;
				node = prev.next;
		}
		else {
			buff[node.data] = node;
			prev = node;
			node = node.next;
		}
	}

	return head;
}

printList(makeList());
console.log("\n");
printList(removeDupsLinearSpace(makeList()));
