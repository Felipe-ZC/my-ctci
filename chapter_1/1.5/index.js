/*
 * Write a method to replace all spaces in a string with ‘%20’
 */

function replaceSpaces(str) {
	// Solution 1: JS Regex Replace (cheating?)
	//return str.replace(/\s/g,"%20");
	
	// Solution 2: Iterative solution
	let result = "";
	
	for(let char of str) {
		if(char.match(/\s/))
			result += "%20"
		else result += char;
	}

	return result;
}

module.exports = replaceSpaces;
