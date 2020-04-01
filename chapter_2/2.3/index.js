/*
 * Implement an algorithm to delete a node in the middle of a single linked list, given
 * only access to that node.
 * EXAMPLE
 * Input: the node ‘c’ from the linked list a->b->c->d->e
 * Result: nothing is returned, but the new linked list looks like a->b->d->e
 */

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
* Soluton 1: Swap node values until end of list.
* Now the middle node is at the end of the list,
* remove the last element.
*
* Time: O(n)
* Space: O(1)
*/
function deleteMiddleNode(someNode) {
    let node = someNode;
    let prev = node;
    
    while(node.next) {
        // console.log(node);

        // Swap node values...
        let temp = node.next.data;
        node.next.data = node.data;
        node.data = temp;

        // Advance pointers...
        prev = node;
        node = node.next;
    }

    prev.next = prev.next.next;
}

let newList = makeList();
let middleNode = newList.next.next.next.next;

printList(newList);
console.log();
deleteMiddleNode(middleNode);
printList(newList);
