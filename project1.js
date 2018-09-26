var arr = [0, 0];

function assignValues(array) {
	var temp1 = Number(prompt("First Number"));
	var temp2 = Number(prompt("Second Number"));
	
	if (isNaN(temp1) ) {
		alert("Invalid first number");
	}
	else if (isNaN(temp2) ) {
		alert("Invalid second number");
	}
	
	array[0] = temp1;
	array[1] = temp2;
	
	//console.log(array[0]);
	//console.log(array[1]);
}

function add() {
	assignValues(arr);
	
	alert(arr[0] + " + " + arr[1] + " = " + (arr[0] + arr[1]));
	
	//console.log(arr[0]);
	//console.log(arr[1]);
}


function multiply() {
	assignValues(arr);
	
	alert(arr[0] + " * " + arr[1] + " = " + (arr[0] * arr[1]));
	
	//console.log(arr[0]);
	//console.log(arr[1]);
}

function divide() {
	assignValues(arr);
	
	alert(arr[0] + " / " + arr[1] + " = " + (arr[0] / arr[1]));
	
	//console.log(arr[0]);
	//console.log(arr[1]);
}

function subtract() {
	assignValues(arr);
	
	alert(arr[0] + " - " + arr[1] + " = " + (arr[0] - arr[1]));
	
	//console.log(arr[0]);
	//console.log(arr[1]);
}