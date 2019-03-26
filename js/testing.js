/****************************************************************
***** RECURSION *****
/****************************************************************
/*
	- What is recursion?
		a function that calls itself
	- How do they work?
		invoking same function with different input until base case reached
	- What two essential parts for recursive functions?
		1) base case (the condition to end recursion)
		2) different input (each time function called)
	- Why use recursion?
		faster and cleaner when using tree-like structures (i.e binary search trees, mergesort, quicksort, seaching file structures)
*/

/*
function countDown1(num) {
	if (num <= 0) {
		console.log('Done!');
		return;
	}
	console.log(num);
	num--;
	countDown1(num);
}
countDown1(3);

function countDown2(num) {
	for (let i = num; i > 0; i--) {
		console.log(i);
	}
	console.log('Done!');
}
countDown2(3);
*/


/*
function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num-1);
}
sumRange(3);
*/


/*
function factorial(num) {
	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}
factorial(5);

function factorial(num) {
	// base case
	if (num === 1) return 1;
	// diff input
	return num * factorial(num-1);
}
factorial(5);
*/


/*
	- What is helper method in recursion?
		a pattern where we have an outer function which is not recursive which calls an inner function which is recursive
*/
/*
function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		// base case
		if (helperInput.length === 0) return;
		// push odd values into result
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		// recursive call w/ diff input
		helper(helperInput.slice(1));
	}
	helper(arr);

	return result;
}
collectOddValues([2,5,22,7,9,32,95,4]);
*/







function collectOddValues(numArr) {
	// storage
	let oddValues = [];

	// base case
	if (numArr.length === 0) return oddValues;
	// push odd values into storage
	if (numArr[0] % 2 !== 0) oddValues.push(numArr[0]);

	// recursive call w/ new input
	oddValues = oddValues.concat( collectOddValues(numArr.slice(1)) );

	return oddValues;
}
collectOddValues([2,5,22,7,9,32,95,4]);





























































































