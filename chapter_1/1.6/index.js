/*
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * */

function toString(matrix) {	
	let result = "";

	for(let i = 0; i < matrix.length; ++i) {
		let row = ""
		for(let j = 0; j < matrix.length; ++j) {
			row += matrix[i][j] + " ";
		}
		// Don't print a newline on the last row...
		result += (i < matrix.length - 1) ? `${row}\n` : `${row}`; 
	}

	return result;
}

function makeMatrix(n) {
	let matrix = [];
	let counter = 1;

	for(let i = 0; i < n; ++i) {
		let temp = [];
		for(let j = 0; j < n; ++j) {
			temp.push(counter);
			++counter;
		}	
		matrix.push(temp);
	}

	return matrix;
}

function reverseCols(theMatrix) {
	for(let col = 0; col < theMatrix.length; ++col) {
		for(let row = 0; row < Math.floor(theMatrix.length/2); ++row) {
			// Swap elements at opposite ends...
			let temp = theMatrix[row][col];
			theMatrix[row][col] = theMatrix[theMatrix.length - row - 1][col];
			theMatrix[theMatrix.length - row - 1][col] = temp;
		}
	}	
}

function rotateMatrix(theMatrix) {
	// Reverse all columns in the matrix first...
	reverseCols(theMatrix);

	/*
	 * Swap elements to rotate matrix, we will swap
	 * each element in a row, for an element in a column:
	 *
	 * 	7 8 9 		  7 4 1
	 * 	4 5 6 --->  8 5 6
	 * 	1 2 3       9 2 3
	 * */
	let startRow = 0;
	let startCol = 0;
	
	while(startRow < theMatrix.length) {
			for(let col = startCol; col < theMatrix.length; ++col) {
				let temp = theMatrix[startRow][col];
				theMatrix[startRow][col] = theMatrix[col][startRow];
				theMatrix[col][startRow] = temp;
			}
		++startRow;
		++startCol;
	}
}

// Test
let size = process.argv.slice(2)[0];
let matrix = makeMatrix(size);

console.log(toString(matrix) + '\n');
rotateMatrix(matrix);
console.log(toString(matrix));
