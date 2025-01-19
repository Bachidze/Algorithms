// ალგორითმები

// 1) Big-O ნოტაცია (O ნოტაცია)

// Big-O გამოიყენება ალგორითმის შესრულების ზედა საზღვრების აღწერისთვის. ეს ასიმპტოტიკური ზემოდან საზღვარი აღვწერს ალგორითმის ზრდის ტემპს, როგორც მონაცემთა ზომა იზრდება. იგი წარმოადგენს უარესი შემთხვევაში შესრულებას.
// მაგალითი: O(n), O(n²), O(log n)

// 2) Big-Ω ნოტაცია (Ω ნოტაცია)

// Big-Ω აღწერს ალგორითმის შესრულების ქვედა საზღვარს. ეს ასიმპტოტიკური ქვედა საზღვარი მოიცავს საუკეთესო შემთხვევაში შესრულებას
// (ან გარანტირებულ მინიმუმს).
// მაგალითი: Ω(n), Ω(log n)

// 3)  Theta ნოტაცია (Θ ნოტაცია)

// Theta Notation აერთიანებს როგორც ზედა, ისე ქვედა საზღვრებს, რაც ნიშნავს,
// რომ იგი აღწერს ალგორითმის შესრულების მჭიდრო საზღვრებს.
// ეს აღწერს ისეთ ფუნქციას, რომელიც როგორც ზედა, ასევე ქვედა საზღვარია ალგორითმის დროით ან სივრცით სირთულეში
// მაგალითი: Θ(n), Θ(n log n)

// Big-O Time complexity

// function summation(n){
//     let sum = 0
//     for(let i = 1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(summation(3)) // თუ გადავცემთ 3 დააბრუნებს 6 -> (1+2+3) = 6

// Big-O Calculation

// function summation(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(summation(3));  // თუ გადავცემთ 3 დააბრუნებს 6 -> (1+2+3) = 6

// ზემოთ მოეცმული მაგალითებიდან მეორე უკეთესია ვიდრე პირველი რადგან ნაკლები O(1) ყოველთვის სჯობია O(n)-ს

// მაგალითად რაც მეტ ლუპს გამოვიყენებთ დროც მეტი დასჭირდება ჩვენს ალგორითმს რათა გაუმკლავდეს პრობლემას

// for(let i = 0; i<=n;i++){
//     for(j=1;j<=i;j++){

//     }
// } // ეს არის O(n^2) - Quadratic

// for(let i = 0; i<=nl;i++){
//     for(j=1;j<=i;j++){
//         for(k=1;k<=k;k++){

//         }
//     }
// } // ეს არის O(n^3) - Cubic

// Space Complexity

// O(1) - Constant

// O(n) - Linear

// O(logn) - Logarithmic

// Objects - Big-O

/* const person = {
  firstName: "Bruce",
  lastName: "Wayne",
}; */

// insert - O(1)
// Remove - O(1)
// Acccess - O(1)
// Search - O(n)
// Object.Keys() - O(n)
// Object.Values() - O(n)
// Object.entries() - O(n)

// Array - Big-O

// const odd = [1,3,5,7,9]

// insert - O(1)
// Remove - O(1)
// Acccess - O(1)
// Search - O(n)
// Push / Pop() - O(1)
// Shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce  - O(n)

// Math Algorithms

// 1) Fibonacci sequence

// 2) Factorial of a number

// 3) Prime number

// 4) Power of two

// 5) Recursion

// 6) Fibonacci sequence with recursion

// 7) Factorial of a number With recursion

// Fibonacci sequence

/* fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(4) = [0,1,1,2]
fibonacci(5) = [0,1,1,2,3]
fibonacci(6) = [0,1,1,2,3,5]
fibonacci(7) = [0,1,1,2,3,4,5,8]
fibonacci(8) = [0,1,1,2,3,4,5,8,13]
fibonacci(9) = [0,1,1,2,3,4,5,8,21] */

// O(n)

/* function fibonacci(n){
 const fibonacciArr = [0,1]
 for(let i = 2;i < n;i++){
  fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i -2]
 }
 return fibonacciArr
}

console.log(fibonacci(8))
 */

// Calculate not dependent on input size - O(1)

// 1 loops - O(n)

// 2 nested loops - O(n^2)

// Input size reduced by half - O(logn)

// Factorial of a number

/* function factorial(n) {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(factorial(5)); */

// Prime number

// ეს ძალიან მაგარი რაღაც არის :D Math.sqrt() იმის მაგივრად რომ მგალითად ჩვენმა ფუქნციამ რიცხვები შეამოწმოს 2 -> 24 მდე ის ამოწმებს
// Math.sqrt() - ის დახმარებით 2 -> 4.91 - მდე. რადგან 24-ის კვადრატული ფესვი არის 4.91

/* function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(24)); */

/* function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(24)); */

// Power of Two

// n = 8
// 8/2 = 4
// 4/2 = 2
// 2/2 = 1

// if remidner is not 0 in any step, `n` is not a power of two

// ეს არის O(logn)

// function isPowerOfTwo(n){
//   if(n<1){
//     return false
//   }
//   while(n > 1){
//     if(n % 2 !==0){
//       return false
//     }
//     n = n /2
//   }
//   return true
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwo(7))

// ეს არის O(1)

// function isPowerOfTwo(n){
//   if(n<1){
//     return false
//   }
//   return (n & (n-1)) === 0
// }

// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(6))

// n = 2 -> ბინარული სახით 10
// n - 1 = 1 -> ბინარული სახით 01
// n & (n - 1) = 10 & 01 = 00

// Recursion
/* function fibonacci(n){
  const fib = [0,1]
  if(n<2){
    return false
  }
  for(let i = 2;i<n;i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

console.log(fibonacci(5))


function fibonacci2(n){
  if(n <=2){
    return 1
  }
  return fibonacci2(n-1) + fibonacci2(n-2)
}

console.log(fibonacci2(5)) */

// Fn=Fn-1 + Fn-2 ფიბონაჩის ფორმულა

// ვიგებთ მასივში ბოლო რიცხვი რა იქნება

/* function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); 
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6)); 
console.log(recursiveFibonacci(7)); 
console.log(recursiveFibonacci(8)); 
console.log(recursiveFibonacci(9));  */

// RecursiveFactorial

// function recursiveFactorial(n){
// if(n === 0){
//   return 1
// }
// return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(5))

// Linear Search
// ვიყენებ როდესაც მასივი არარის სორტირებული

// function linearSearch(arr,target){
//   for(let i = 0 ;i < arr.length;i++){
//     if(arr[i] === target){
//       return i
//     }
//   }
//   return -1
// }

// console.log(linearSearch([-15,42,-4,41,6],6))

// Binary Search
// ვიყენებ როცა მასივი სორტირებულია

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 2));


//Recursive binary search

 function recursiveBinarySearch(arr,target) {
  return search(arr,target,0,arr.length-1)
 }

 function search(arr,target,leftIndex,rightIndex){
  if(leftIndex > rightIndex){
    return - 1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]){
    return middleIndex
  }
  if(target < arr[middleIndex]){
   return  search(arr,target,leftIndex,middleIndex - 1)
  }else{
   return  search(arr,target,middleIndex + 1,rightIndex)
  }

 }


 console.log(recursiveBinarySearch([-5,2,4,6,10],10))
 console.log(recursiveBinarySearch([-5,2,4,6,10],6))
 console.log(recursiveBinarySearch([-5,2,4,6,10],20))




