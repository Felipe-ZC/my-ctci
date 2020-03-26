/*
 * Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
 * five characters, including the null character.)
 * */

// Assume str is always valid...
function strRev(str) {
	let rev = "";
	let counter = 0;

	while(str.charAt(counter) !== '\0') { 
		rev = str.charAt(counter) + rev;
		counter += 1;
	}

	return rev + '\0';
}

module.exports = strRev;
