// function doubleEvenNumbers(numbers) {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         newNumbers.push(numbers[i] * 2);
//       }
//     }
//     return newNumbers;
//   }
  
//   const myNumbers = [1, 2, 3, 4];
//   console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console


// The doubleEvenNumbers function returns only the even numbers in the array myNumbers and doubles them. Like you've learned in 
// the README, this block of code isn't easy to decipher.Let's rewrite it.
// Using the map and filter functions, rewrite the doubleEvenNumbers function.

const numbers = [1, 2, 3, 4];
function doubleEvenNumbers(numbers) {
    const newNumbers = numbers.filter( number => number % 2 === 0)
        .map( number => number * 2);
    return newNumbers;
}

console.log(doubleEvenNumbers(numbers));