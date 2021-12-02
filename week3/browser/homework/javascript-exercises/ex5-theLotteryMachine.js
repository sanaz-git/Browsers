// Exercise 5: The lottery machine

// Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let's get started!

// Write a function that takes 4 arguments.

// A start value
// An end value
// A callback that executes if the number is divisible by 3
// A callback that executes if the number is divisible by 5
// The function should first generate an array containing values from start value to end value (inclusive).

// Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.

// The function should call the second callback if the array value is divisible by 5.

// Both functions should be called if the array value is divisible by both 3 and 5.

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    // make array
    if (startIndex > stopIndex) {
			let arr = new Array(startIndex - stopIndex + 1);
			for (let i = 0; i < arr.length; i++, startIndex--) {
				arr[i] = startIndex;
			}
			return arr;
		} 
       else 
       {
			let arro = new Array(stopIndex-startIndex+1);
         
		for (let j = 0; j < arro.length; j++, startIndex++) 
        {
			arro[j] = startIndex;
		}
      		return arro;
		}
	
    
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  }
  
  console.log(threeFive(10, 15));
  
  // Should create an array [10,11,12,13,14,15]
  // and call sayFive, sayThree, sayThree, sayFive

  function threeCallback(){
    console.log("value is divisible by 3")
  }
  function fiveCallback(){
    console.log("value is divisible by 5")
  }