
// Part 2 : Find the culprits and nail them — debugging javascript loops


// 1.Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string


// 2.Write a code to print the numbers in the array
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = new String(numsArr[0]);
 
// for (var i = 1; i < 11; i++) {
//  new_string += "," +numsArr[i] 
// }
// console.log(new_string);


// 3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = new String(numsArr[10]);
 
// for (var i = 9; i >= 0; i--) {
//  new_string += " "+ numsArr[i] 
// }
// console.log(new_string);


// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);


// 5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 1; i <=10; i++) {
//  if((i+1) %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);


// 6.Write a code to add all the numbers in the array
// Output: 66
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=10; i++) {
 
//  sum += numsArr[i]
// }
// console.log(sum);

// 7.Write a code to add the even numbers only
// Output: 30
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0) 
 
//  sum += numsArr[i]
// }
// console.log(sum);

// 8.Write a code to add the even numbers and subract the odd numbers
// Output: 94

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2===0)
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//     console.log( numsArr[i])

// }
 
 // 10.Write a code to print elements in the inner arrays
 

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);




// part-3 Find the culprits and nail them — debugging javascript
// 1 var aa=function(f,s,t){

//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);

// var userInput="123"
// var a = userInput.split("");
//   var b=a.map(Number)
//   let sum=0;
//   for(let i=0;i<b.length;i++){
  
//   sum=sum+b[i]
//   }
//   console.log(sum)


// var arr = [9,8,5,6,4,3,2,1]
// let sum=0;
//  function sumofelements(){
//  for (let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//  }
//  return sum
//  }

// console.log(sumofelements(arr))


// const array = [-5, -3, -2, -1, ...Array(20).keys()]; 

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); 



// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// let temp=[]

//  function odd(){
//      for (let i=0;i<=arr.length;i++){
//      if (i%2!=0)
//     temp.push(i);
// }
//  return temp

//  }
//  console.log(odd(arr))