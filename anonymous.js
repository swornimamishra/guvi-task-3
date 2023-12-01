// task 3
// a.Print odd numbers in an array

  //       // Anonymous
  //  var input=function(a){
  //  for(let i=0;i<a.length;i++){   
  //  if(a[i]%2!=0){
  //  console.log(a[i]);
  //  }
  //  }
  //  }
  //  input([1,2,3,4,5,6]);  

//         IIEF
// (function(a){
// for(let i=0;i<a.length;i++){
// if(a[i]%2!=0){
// console.log(a[i]);
// }
// }
// })([1,2,3,4,5,6]);

// output:1
//        3
//        5

// b.Convert all the strings to title caps in a string array

//        Anonymous
// var input=function(info){
// info=info.toLowerCase().split(" ");
// for(let i=0;i<info.length;i++){
// info[i]=info[i].charAt(0).toUpperCase()+info[i].slice(1);
// }
// console.log(info.join(" "));
// }
// input("This is anonymous function");

//           IIEF
// (function(info){
// info=info.toLowerCase().split(" ");
// for(let i=0;i<info.length;i++){
// info[i]=info[i].charAt(0).toUpperCase()+info[i].slice(1);
// }
// console.log(info.join(" "));
// })("This is IIFE function");  output:"This Is IIFE Function"

// c.Sum of all numbers in an array

//          Anonymous
// var input= function(a){
// let sum=0;
//  for(let i=0;i<a.length;i++){
//  sum=sum+a[i];
// }
// console.log(sum);
// }
// input([1,2,3,4,5,6,7,8,9])       output:45

//        IIEF
// (function(a){
// let sum=0;
//  for(let i=0;i<a.length;i++){
//  sum=sum+a[i];
// }
// console.log(sum);
// })([1,2,3,4,5,6,7,8,9]);

// d.Return all the prime numbers in an array

//          Anonymous
// var input=function(arr) {
//   const primeNumbers = [];

//   for (let num of arr) {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime && num > 1) {
//       primeNumbers.push(num);
//     }
//   }

//   console.log(primeNumbers);
// }
// input([1,2,3,4,5,6,7,8,9]);

//            IIEF
// (function(arr) {
//   const primeNumbers = [];

//   for (let num of arr) {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime && num > 1) {
//       primeNumbers.push(num);
//     }
//   }

//   console.log(primeNumbers);
// })([1,2,3,4,5,6,7,8,9]);          Output:[2, 3, 5, 7]

// e.Return median of two sorted arrays of the same size.

//          Anonymous
// var input=function(a){
// let s=[];
// for(let i=0;i<a.length;i++){
// let rev= a[i].split("").reverse().join("");
// //console.log(rev);
// if(a[i]==rev){
// s.push(a[i]);
// }
// }
// console.log(s);
// }
// input(["sowmi","shri","india","pop","madam"]);

//          IIEF
// (function(a){
// let s=[];
// for(let i=0;i<a.length;i++){
// let rev= a[i].split("").reverse().join("");
// //console.log(rev);
// if(a[i]==rev){
// s.push(a[i]);
// }
// }
// console.log(s);
// })(["sowmi","shri","india","pop","madam"]);   output: ["pop", "madam"]

// f.Return median of two sorted arrays of the same size.

//                   Anonymous
// var input=function (nums1, nums2) {
//     const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

//   const middleIndex = Math.floor(mergedArray.length / 2);

//    if (mergedArray.length % 2 === 0) {
    
//     return (mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2;
//   } else {
   
//     return mergedArray[middleIndex];
//   }
// }
// var ans=input([1,2,3],[4,5,6]);
// console.log(ans);

//                  IIEF
// (function (nums1, nums2) {
//     const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

//   const middleIndex = Math.floor(mergedArray.length / 2);

//    if (mergedArray.length % 2 === 0) {
    
//    console.log( (mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2);
//   } else {
   
//     console.log(mergedArray[middleIndex]);
//   }
// })([1,2,3],[4,5,6]);           output:3.5

// g.Remove duplicates from an array

//         Anonymous
//  var input=function(a){
//  let temp=[];
//  for(let i=0;i<a.length;i++){
//  if(temp.includes(a[i])==false){
//  temp.push(a[i]);
//  }
//  }
//   console.log(temp);
//  }
//  input(["shri","sow","shri"]);
 
//        IIEF
// (function(a){
//  let temp=[];
//  for(let i=0;i<a.length;i++){
//  if(temp.includes(a[i])==false){
//  temp.push(a[i]);
//  }
//  }
//   console.log(temp);
//  })(["shri","sow","shri"]);   output:["shri","sow"]

// f.Rotate an array by k times

//         Anonymous
// var input=function(nums,k){
// for(let i=0;i<k;i++){
// nums.unshift(nums.pop());
// }
// console.log(nums);
// }
// input([1,2,3,4,5,6],2);      output:[5, 6, 1, 2, 3, 4]

//         IIEF
// (function(nums,k){
// for(let i=0;i<k;i++){
// nums.unshift(nums.pop());
// }
// console.log(nums);
// })([1,2,3,4,5,6],2); output:[5, 6, 1, 2, 3, 4]

// 2. Do the below programs in arrow functions.

// a.Print odd numbers in an array
// var input=(a)=>{
//    for(let i=0;i<a.length;i++){
//    if(a[i]%2!=0){
//    console.log(a[i]);
//    }
//    }
//    }
//    input([1,2,3,4,5,6]);
// output:1
//        3
//        5

// b.Convert all the strings to title caps in a string array

// var input=(info)=>{
// info=info.toLowerCase().split(" ");
// for(let i=0;i<info.length;i++){
// info[i]=info[i].charAt(0).toUpperCase()+info[i].slice(1);
// }
// console.log(info.join(" "));
// }
// input("This is anonymous function");  output:"This Is Anonymous Function"

// c.Sum of all numbers in an array

// var input= (a)=>{
// let sum=0;
//  for(let i=0;i<a.length;i++){
//  sum=sum+a[i];
// }
// console.log(sum);
// }
// input([1,2,3,4,5,6,7,8,9]);   output:45

// d.Return all the prime numbers in an array

// var input=(arr)=> {
//   const primeNumbers = [];

//   for (let num of arr) {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime && num > 1) {
//       primeNumbers.push(num);
//     }
//   }

//   console.log(primeNumbers);
// }
// input([1,2,3,4,5,6,7,8,9]);  Output:[2, 3, 5, 7]


// e.Return all the palindromes in an array

// var input=(a)=>{
// let s=[];
// for(let i=0;i<a.length;i++){
// let rev= a[i].split("").reverse().join("");
// //console.log(rev);
// if(a[i]==rev){
// s.push(a[i]);
// }
// }
// console.log(s);
// }
// input(["sowmi","shri","india","pop","madam"]); Output:["pop", "madam"]

