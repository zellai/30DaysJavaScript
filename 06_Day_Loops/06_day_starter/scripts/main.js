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



