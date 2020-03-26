/*
 * Write a method to decide if two strings are anagrams or not,
 * NOTES: Consider the case where strings have whitespace chars
 * and puncutation marks...
 */

function getCharMap(str) {
	let charMap = {};	
	/*
	 * The regex below matches only alphanumeric characters,
	 * this way we can avoid counting whitespaces and punctutation
	 * marks as part of the char map... 
	 * */
	for(let char of str.match(/\w/g)) 
		charMap[char] = charMap[char] ? charMap[char] += 1 : 1;

	return charMap;
} 

function areAnagrams(str1, str2) {
	if(str1.match(/\w/g).length !== str2.match(/\w/g).length)
		return false;
	// else
	let map1 = getCharMap(str1);
	let map2 = getCharMap(str2);
	
	for(let key of Object.keys(map1))
		if(map1[key] !== map2[key])
			return false;

	return true;
}

module.exports = areAnagrams;
