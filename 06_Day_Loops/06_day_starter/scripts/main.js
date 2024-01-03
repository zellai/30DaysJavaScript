// EXERCISE 1
// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// for(let i = 0; i <= 5; i++){
//     console.log(i)
//   }
  
  // 0 1 2 3 4 5

  // const countries = [
  //   'Albania',
  //   'Bolivia',
  //   'Canada',
  //   'Denmark',
  //   'Ethiopia',
  //   'Finland',
  //   'Germany',
  //   'Hungary',
  //   'Ireland',
  //   'Japan',
  //   'Kenya'
  // ]
  
  // const webTechs = [
  //   'HTML',
  //   'CSS',
  //   'JavaScript',
  //   'React',
  //   'Redux',
  //   'Node',
  //   'MongoDB'
  // ]
  
  // const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//  1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while(i <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let i = 10; i >= 0; i--){
//   console.log(i)
// }

// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while(j >= 0);

// 3. Iterate 0 to n using for loop
/*4. Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
####### */
// for (let i = 1; i <= 7; i++) {
//   let line = '';
//   for (let j = 1; j <= i; j++) {
//       line += '#';
//   }
//   console.log(line);
// }

/*5. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

// for(let i=0; i<=10; i++){
//   console.log(i +" X "+ i +" = "+ i*i)
// }

/*6. Using loop print the following pattern

i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000 */

// console.log("i\ti^2\ti^3")
// for(let i=0; i<=10; i++){
//   console.log(i +"\t"+ i*i +"\t"+ i*i*i)
// }

/*7. Use for loop to iterate from 0 to 100 and print only even numbers

for(i=0; i<=100; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}
8. Use for loop to iterate from 0 to 100 and print only odd numbers

for(i=0; i<=100; i++){
  if(i % 2 == 1){
    console.log(i);
  }
}

9. Use for loop to iterate from 0 to 100 and print only prime numbers

for(i=0; i<=100; i++){
  if (i==5) {
    console.log(5)
  }else if (i==2) {
    console.log(2)
  }else if (i == 7){
    console.log(7);
  }else if(i*i % 5 == 0){
  } else if(i === 3){
    console.log(i);
  } else if(i % 2 === 0 || i % 3 === 0){
  }else if(i == 1){
  }else if(i%7==0){
  }
  else {
    console.log(i);
  }
}
10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
The sum of all numbers from 0 to 100 is 5050. 

let count = 0;
for(let i=0; i<=100; i++){
  count += i;
}
console.log(count);

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let evenSum = 0;
let oddSum = 0;
for(let i=0; i<=100; i++){
  if(i % 2 == 0){
    evenSum += i;
  } else if(i % 2 == 1) {
    oddSum += i;
  }
}
console.log("The sum of all evens from 0 to 100 is " + evenSum + ". And the sum of all odds from 0 to 100 is " + oddSum +".");


12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  [2550, 2500]

let evenSum = 0;
let oddSum = 0;
let arr = [];
for(let i=0; i<=100; i++){
  if(i % 2 == 0){
    evenSum += i;
  } else if(i % 2 == 1) {
    oddSum += i;
  }
}
arr.push(evenSum);
arr.push(oddSum);
console.log(arr);

13. Develop a small script which generate array of 5 random numbers

arr = [];
for (let i=0; i<5; i++){
  num = Math.floor(Math.random() * 100);
  arr.push(num);
}
console.log(arr);

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

arr = [];
for (let i=0; i<5; i++){
  num = Math.floor(Math.random() * 2000);
  arr.push(num);
}
console.log(arr);


15. Develop a small script which generate a six characters random id: 5j2khz

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

let counter = 0;
while (counter < 6) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  counter ++;
}
console.log(result);

*/

/* EXERCISE 2
1. Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba */

// let result = '';
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const charactersLength = characters.length;

// let counter = 0;
// while (counter < Math.floor(Math.random() * 50)) {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   counter ++;
// }
// console.log(result);

/* 2. Write a script which generates a random hexadecimal number.
'#ee33df'*/

// let result = '';
// const characters = '0123456789abcdef';
// const charactersLength = characters.length;

// let counter = 0;
// while (counter < 6) {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   counter ++;
// }
// console.log("#" +result);

/*3. Write a script which generates a random rgb color number.
rgb(240,180,80)*/

// let counter = 0;
// let arr = [];
// while (counter < 3) {
//   num = Math.floor(Math.random() * 255);
//   counter ++;
//   arr.push(num);
// }
// console.log("rgb(" + arr[0] +"," + arr[1] + "," + arr[2]+")");


/*4. Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/

// const country = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// let arr = [];
// let counter = 0;
// while (counter < country.length) {
//   arr.push(country[counter].toUpperCase());
//   counter ++;
// }
// console.log(arr);

/*5. Using the above countries array, create an array for countries length'.
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]*/

// let arr = [];
// let counter = 0;
// while (counter < country.length) {
//   arr.push(country[counter].length);
//   counter ++;
// }
// console.log(arr);

/*6. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

// let arrAll = [];
  
//   for (let i = 0; i < country.length; i++) {
//     let arr = [
//       country[i],
//       country[i].slice(0, 3).toUpperCase(),
//       country[i].length
//     ];
//     arrAll.push(arr);
//   }
  
//   console.log(arrAll); 

/*7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  ['Finland','Ireland', 'Iceland']*/

//   const country = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
//   'Iceland'
// ];

// let countriesWithLand = country.filter(country => country.toLowerCase().includes('land'));

// if(countriesWithLand.length > 0){
//   console.log(countriesWithLand)
// }else {
//   console.log("There is no country name that has land.");
// }


/*8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. If there is no country containing the word 'ai', 
print 'These are countries ends without ia'.
['Albania', 'Bolivia','Ethiopia']*/

// let countriesWithLand = country.filter(country => country.toLowerCase().includes('ia'));

// if(countriesWithLand.length > 0){
//   console.log(countriesWithLand)
// }else {
//   console.log("These are no countries ends without 'ia'");
// }

    
/*9.Using the above countries array, find the country containing the biggest number of characters.
Ethiopia*/

// let maxLength = 0;
// let countryWithMaxChars = '';

// for (let i = 0; i < country.length; i++) {
//   if (country[i].length > maxLength) {
//     maxLength = country[i].length;
//     countryWithMaxChars = country[i];
//   }
// }

// console.log(countryWithMaxChars);

/*10. Using the above countries array, find the country containing only 5 characters.
['Japan', 'Kenya'] */

// for (let i = 0; i < country.length; i++) {
//   if (country[i].length == 5) {
//     console.log(country[i]);
//   }
// }


/*11. Find the longest word in the webTechs array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] */

// let max = 0;
// let web = '';

// for (let i = 0; i < webTechs.length; i++) {
//   if (webTechs[i].length > max ) {
//     max = webTechs[i].length;
//     web = webTechs[i];
//   }
// }
// console.log(web);

/*12. Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]] */

// let allArr = [];

// for (let i = 0; i < webTechs.length; i++) {
//    arr = [
//     webTechs[i],
//     webTechs[i].length
//   ];
//   allArr.push(arr);
  
// } console.log(allArr);

/*13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
*/

// let mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// let mer = '';

// for(let i=0; i< mernStack.length; i++){
//   mer += mernStack[i][0];
// }
// console.log(mer);

/*14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items.
*/
// let web = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 

// for(const prog of web){
//   console.log(prog);
// }

/*15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
reverse the order using loop without using a reverse method. */

// let fruits = ['banana', 'orange', 'mango', 'lemon'];
// let reversefruit = [];

// for(i=fruits.length-1; i>=0; i--){
//   reversefruit.push(fruits[i]);
// }
// console.log(reversefruit);

/*16. Print all the elements of array as shown below.
  
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];


for(let prog of fullStack[0]){
  console.log(prog.toUpperCase());
}
for(let prog of fullStack[1]){
  console.log(prog.toUpperCase());
}







