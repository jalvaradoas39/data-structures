/****************************************************************
***** RECURSION *****
/****************************************************************/
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


/*
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
*/









/****************************************************************
***** Linear Search *****
/****************************************************************/
/*
	- What is linear seach?
		a process that checks every element in the list sequentially until the desired element is found.
	- When use it?
		1. list is short
		2. unordered
	- BigO(worst and best case)
		worst case: O(n)
		best case: O(1)
	- JavaScript functions using some sort of linear search
		1. indexOf
		2. includes
		3. find
		4. findIndex
	- How use it?
		solution
		callstack (view)
*/
/*
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];

function getIndex(elem, arr) {
	// force first letter to uppercase
	const upperCaseElem = elem.charAt(0).toUpperCase() + elem.slice(1);

	for (let i=0; i < arr.length; i++) {
		// is elem equal current elem in arr
		if (upperCaseElem === arr[i]) {
			// found
			return i;
		}
	}
	// not found
	return -1;
}
getIndex('alaska', states);
*/








/****************************************************************
***** Binary Search *****
/****************************************************************/

function binarySearch(elem, arr) {
	let start = 0;
	let end = arr.length-1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== elem && start <= end) {
		if (arr[middle] > elem) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (arr[middle] === elem) {
		return middle;
	}

	return -1;
}

binarySearch(4, [2,5,6,9,10]);





































































































