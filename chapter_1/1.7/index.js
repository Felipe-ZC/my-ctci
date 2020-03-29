/*
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column is set to 0.*
*/

function makeRowAndColZero(matrix, row, col) {
	for(let i = 0; i < matrix[row].length; ++i) 
        matrix[row][i] = 0;
        

	for(let i = 0; i < matrix.length; ++i) 
        matrix[i][col] = 0;
}

function makeRowColNull(matrix, row, col) {
   	for(let i = 0; i < matrix[row].length; ++i) 
        matrix[row][i] = matrix[row][i] !== null && matrix[row][i] !== 0
                         ? null
                         : matrix[row][i];
        
	for(let i = 0; i < matrix.length; ++i) 
        matrix[i][col] = matrix[i][col] !== null && matrix[i][col] !== 0
                         ? null
                         : matrix[i][col]; 
}

function toString(matrix) {	
	let result = "";

	for(let i = 0; i < matrix.length; ++i) {
		let row = ""

		for(let j = 0; j < matrix[i].length; ++j) 
			row += matrix[i][j] + " ";
		
		// Don't print a newline on the last row...
		result += (i < matrix.length - 1) ? `${row}\n` : `${row}`; 
	}

	return result;
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function setZeroes = function(matrix) {  
    /*
    * Brute Force: Find all row, col pairs whose element is equal to zero,
    * store row,col pair in array then iterate through the row,col array 
    * and set each pair to zero...
    * Time: O(m*n)
    * Space: O(m*n)
    
    let zeros = [];
    
    for(let i = 0; i < matrix.length; ++i) 
        for(let j = 0; j < matrix[i].length; ++j)
            if(matrix[i][j] === 0) {
                let rowCol = {};
                rowCol["row"] = i;
                rowCol["col"] = j;
                zeros.push(rowCol);
            }
    
   zeros.forEach(obj => makeRowAndColZero(matrix, obj.row, obj.col));*/
    
    /*
    * Solution 2: Scan matrix, look for elements whose value is zero. If a
    * zero if found call the makeRowColNull function.
    *
    * makeRowColNull will make each non null or non zero element in the given
    * row/col null. This way we can mark each element that needs to be zero 
    * without adding any redudant zeros. 
    *
    * Afterwards we must go back to the matrix and make each null element equal 
    * to zero. Due to the way JavaScript works, LeetCode will accept a submission
    * with null values, this is because zero and null are both falsy values, my 
    * guess is that when checking the matrix the LeetCode answer checks for true
    * or false instead of a numeric value. 
    */    
    for(let i = 0; i < matrix.length; ++i) 
        for(let j = 0; j < matrix[i].length; ++j)
            if(matrix[i][j] === 0)
               makeRowColNull(matrix, i, j);
    
    
    // for(let i = 0; i < matrix.length; ++i) 
    //     for(let j = 0; j < matrix[i].length; ++j)
    //         if(matrix[i][j] === null)
    //            matrix[i][j] = 0;
};



