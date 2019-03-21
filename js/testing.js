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


function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num-1);
}

sumRange(3);

















































