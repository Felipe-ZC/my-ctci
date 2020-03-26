/*
 * Implement an algorithm to determine if a string has all unique characters. What if you
 * can not use additional data structures?
 * */

function hasUniqueChars(str) {
	// Solution 1:
	// Time: O(n)
	// Space: O(n)
	/*let strMap = {};

	for(let ch of str) {
		if(strMap[ch])
			return false;
		else 
			strMap[ch] = true;
	}

	return true;*/

	// Solution 2
	// Time: O(n^2)
	// Space: O(1)
	/*for(let i = 0; i < str.length; ++i) {
		let curr = str[i];

		for(let j = i+1; j < str.length; ++j ) 
			if(str[i] === str[j])
				return false;
	}

	return true;*/

	// Solution 3
	// Time: O(n)
	// Space: O(1)
	/*
	 * Explanation: Bit Vector!
	 * A bit vector or bit array is an array
	 * in which every element is 1 or 0. 
	 *
	 * In ASCII symbols are given numeric values,
	 * the letter a (lowercase) is given the value
	 * 97.
	 *
	 * The solution below is similar to using an array of
	 * booleans, we start by iterating through char in the
	 * string. We calculate the offset from 'a', and check
	 * if the bit has already been set in the bit array.
	 *
	 * If the bit has not been set, we proceed to set the bit
	 * by OR'ing the current value of bitArray with the offset.
	 *
	 * This will produce a 32 bit binary number in which the 1 
	 * bit's represent a flag. This flag is used to tell our algorithm
	 * if we have already encounterd a particular char while iterating
	 * through the string. 
	 *
	 * Example:
	 *
	 * str = 'aa'
	 * char = 'a'
	 * bitArray = 0;
	 * val = 97 - 97 = 0;
	 * [0 & (1 << 0)] > 0 = flase
	 * bitArray = 01
	 * 
	 * str = 'aa'
	 * char = 'a'
	 * bitArray = 01;
	 * val = 97 - 97 = 0;
	 * [01 & (1 << 0)] > 0 = true
	 * Duplicate found!
	 * * */

	let bitArray = 0; // Used to store bits...
	
	for(let char of str) {
		// Get ASCII offset...
		// This means, how far char is from the letter 'a'
		// in the ASCII table...
		let val = char.charCodeAt(0) - 'a'.charCodeAt(0);
		
		
		// If we have already set this bit flag...
		if((bitArray & (1 << val)) > 0)
			return false;

		// Update bit array with new flag...
		bitArray |= (1 << val);
	}
	return true;
}

module.exports = hasUniqueChars;
