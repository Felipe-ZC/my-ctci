/*
 * Given a circular linked list, implement an algorithm which returns node at the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an
 * earlier node, so as to make a loop in the linked list.
 * EXAMPLE
 * input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * output: C
* */

const Node = require('../node.js')

function makeList() {
	let head = new Node('a');
	
	head.next = new Node('a');
	head.next.next = new Node('d');
	head.next.next.next = new Node('b');
	head.next.next.next = new Node('c');
	head.next.next.next.next = head.next.next;

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
 * Solution 1: Hash Map
 * Time: O(n^2) -> Time it takes to fill hashmap + time it takes to look
 * for node in the collision list. 
 * Space: O(n)
 * */
var detectCycle = function(head) {
    let node = head;
    let map = {};
    
    while(node) {
        // Handle collisions...
        if(map[node.val]) {
            if(Array.isArray(map[node.val])) {
                if(map[node.val].find(n => n === node))
                    return node;
                else map[node.val].push(node);
            }
            else if(map[node.val] === node)
                return node;
            else
                map[node.val] = [map[node.val], node];
        }
        else map[node.val] = node
        node = node.next;
    }
    
    return null;
};
/*
 * Solution 2: Set
 * Time: O(n) 
 * Space: O(n)
 * */
var detectCycle = function(head) {
    let node = head;
    let map = {};
    
    while(node) {
        // Handle collisions...
        if(map[node.val]) {
            if(Array.isArray(map[node.val])) {
                if(map[node.val].find(n => n === node))
                    return node;
                else map[node.val].push(node);
            }
            else if(map[node.val] === node)
                return node;
            else
                map[node.val] = [map[node.val], node];
        }
        else map[node.val] = node
        node = node.next;
    }
    
    return null;
};

/*
 * Solution 3: Two Pointers (Floyd's Algorithm)
 * Time: O(n)
 * Space: O(1)
 * */
var getIntersect = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast)
            return slow;
    }

    return null;
}

var detectCycle = function(head) {
    let intersect = getIntersect(head);

    if(intersect) {
        let node = head;

        while(node !== intersect) {
            node = node.next;
            intersect = intersect.next;
        }

        return node;
    }
    else return null;
}

let head = makeList();
console.log(detectCycle(head));
