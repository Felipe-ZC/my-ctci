/*
 *  Assume you have a method isSubstring which checks if one word is a substring of
 *  another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
 *  only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
 * */

// Returns true if s2 is a substring of s1
function isSubstring(s1, s2) {
	return s1.match(s2);
}

function isRotation(s1, s2) {
	// Concatenate s2 with itself, and check if the resulting
	// string has a substring that is equal to s1!
	let result = s2 + s2;
	return isSubstring(result, s1);
}

module.exports = isRotation;
