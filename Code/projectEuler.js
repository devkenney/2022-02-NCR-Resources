// let sum = 0

// for (let i = 0; i < 1000; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// -------------------------------------------------------------------

// let fibonacciNum = 1
// let lastNum = 1
// let tempNum = 0
// let fibSum = 0

// while (fibonacciNum <= 4000000) {

//   tempNum = fibonacciNum; // sets the temp variable equal to the largest fibonnaci number we have found
//   fibonacciNum += lastNum; // adds the previous number to the largest fibonnaci number we have found (to get the next one)
//   lastNum = tempNum; // sets the lastNum variable equal to the old fibonnaci number

//   if (fibonacciNum % 2 === 0) {
//     fibSum += fibonacciNum;
//   }

// }

// console.log(fibSum);

// -------------------------------------------------------------------

// let numbers = [1, 8, 2, 7, 4];
// let sumSum = 0

// for (let i = 0; i < numbers.length; i++) {
//   sumSum += numbers[i]
// }

// console.log(sumSum);

// -------------------------------------------------------------------

// first we check if the length is even or odd

// if it is even, we check if there is an even number of each letter

// if it is odd, we check if there is an even number of each letter, except for one where there is an odd number of

// function solution(inputString) {
//   const arr = inputString.split('') // splits the string you give it into an array -- arr = ['a', 'a', 'b', 'b', etc.]
//   const tal = [] // creates an empty array??? to be used as an object I guess
//   arr.map(letter =>{ // maps over the array of letters
//       if(tal[letter]){ // if the letter exists in the array(???) then it adds one to it
//           tal[letter]++
//       } else{ // else it creates a new piece and sets it to 1
//           tal[letter] = 1
//       }
//   })
//   let oddCount = 0 // counts the number of odds in the array
//   for(const props in tal){ // uses a for in loop to grab the keys of the array/object thing
//       const value = tal[props] // gets the value of the key in question
//       if(oddCount > 1) break; // if there is more than one odd number of letters, it breaks
//       if(value%2===1){ // if there is an odd letter, it adds 1 to the odd count
//           oddCount+=1
//       }
//   }
//   return oddCount <= 1 // returns true if there is less than or equal to 1 odd number of letters in the string, or false is there is more than 1
// }

// console.log(solution('aabbbccc'));

// -------------------------------------------------------------------