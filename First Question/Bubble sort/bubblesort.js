let bubble_Sort = (a) => {  // arrow function
	let swapp;			// let is used of ES6
	let n = a.length-1;
	let x = a;
	do {
		swapp = false;
		for (let i=0; i < n; i++)
		{
			if(x[i] < x[i+1])
			{
				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp = true;
			}
		}
		n--;
	} while (swapp);
	return x;
} // end of function

let a = bubble_Sort([13,45,23,87]);  //array
console.log(a);  //output in console