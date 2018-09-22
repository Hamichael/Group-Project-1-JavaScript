# Group-Project-1-JavaScript
PSA: Make a branch instead of uploading directly into the Main when making changes.
Master [Main version] < Developer [Working version] < Feature [Work here]<br/>
-----
# CONTRIBUTIONS
Michael - Sample algorithm and bug-fixing<br/>
Susana - CSS<br/>
Grethel & Natalie - JavaScript<br/>
-----
# ALGORITHM
Function to input 2 values into Array of size 2.<br/>
Grabs value of both Array and calculates based on the button pressed.<br/>
<br/>
Sample ALGORITHM to be used
```js
function assignValues(array) {
	array[0] = Number(prompt("First Number"));
	array[1] = Number(prompt("Second Number"));
	
	//console.log(array[0]);
	//console.log(array[1]);
}

function add() {
	assignValues(arr);
	
	alert(arr[0] + " + " + arr[1] + " = " + (arr[0] + arr[1]));
	
	//console.log(arr[0]);
	//console.log(arr[1]);
}
```
