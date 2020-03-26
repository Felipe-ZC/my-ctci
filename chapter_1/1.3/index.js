/*
 * Design an algorithm and write code to remove the duplicate characters in a string
 * without using any additional buffer. NOTE: One or two additional variables are fine.
 * An extra copy of the array is not.
 */

function removeDups(str) {
	/*
	 * Solution 1
	 * Time: O(n^2)
	 * Space: O(1)
	 * */

	// If the ith char appears before the ith position, don't add 
	// it to to the result string, otherwise concatenate char with
	// the result string.
	let newStr = "";
	for(let i = 0; i < str.length; ++i) {
		let curr = str.charAt(i);
		let isDup = false;

		for(let j = i-1; j >= 0; --j) 
			if(str.charAt(j) == curr)
				isDup = true;		

		newStr += isDup ? "" : curr;
	}

	return newStr;
}

module.exports = removeDups;
