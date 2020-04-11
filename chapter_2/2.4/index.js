/*
 * You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1’s 
 * digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked
 * list.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 * Because 513 + 295 = 808
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
 * Solution 1: Iterate through both lists, concatenating each value to the start
 * of a result string. After both result strings are popualted, return the sum of
 * the numbers represented by these strings by using the BigInt object.
 * The resulting value will be a string, which must be parsed into a BigInt for 
 * processing. 
 *
 * Time: O(n+m) -> Iterate through two different sized lists...
 * Space: O(n+m) -> Two strings with length l1 and l2 must be made to perform the sum...
 * */
function getNumFromList(head) {
	let node = head;
	let result = "";

	while(node) {
		result = node.data + result;
		node = node.next;
	}

	return result;
}

function addLists(l1, l2) {
	let num1 = BigInt(getNumFromList(l1));
	let num2 = BigInt(getNumFromList(l2));

	return (num1 + num2).toString();
}


