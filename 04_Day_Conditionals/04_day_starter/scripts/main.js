// Exercise: level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age")
// let underage = 18 - (+age)
// if (age >= 18 ){
//     alert('You are old enought to drive.')
// }else {
//     alert(`Your are left with ${underage} years to drive`)
// }

//  2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let yourAge = prompt("Enter your age:"),
//     myAge = 25,
//     older = yourAge - myAge,
//     younger = myAge - yourAge


// if (yourAge > myAge){
//     alert(`You are ${older} years older than me`)
// }else {
//     alert(`You are ${younger} years younger than me`)
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// let a = 4
// let b = 3

// if (a > b){
//     console.log(`${a} is greater than ${b}`)
// }else {
//     console.log(`${a} is less than ${b}`)
// }

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let num = prompt("Enter number: ")
// if(num % 2 == 0){
//     alert(`${num} is an even number`)
// }else{
//     alert(`${num} is an odd number`)
// }

// Exercise: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// let score = prompt("Enter your score:")
// switch (true) {
//     case score >= 80:
//         alert('A')
//         break
//     case score >= 70 && score <= 89 :
//         alert('B')
//         break
//     case score >= 60 && score <= 69:
//         alert('C')
//         break
//     case score >= 50 && score <= 59:
//         alert('D')
//         break
//     case score >= 0 && score <= 49:
//         alert('F')
//         break
//     default:
//         alert('Entered value was not a number')
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// let month = prompt("Enter the month:"),
//     months = month.toLowerCase()

// switch (month){
//     case 'september':
//         alert('The season is Autumn')
//         break
//     case 'october':
//         alert('The season is Autumn')
//         break
//     case 'november':
//         alert('The season is Autumn')
//         break
//     case 'december':
//         alert('The season is Winter')
//         break
//     case 'january':
//         alert('The season is Winter')
//         break
//     case 'february':
//         alert('The season is Winter')
//         break
//     case 'march':
//         alert('The season is Spring')
//         break
//     case 'april':
//         alert('The season is Spring')
//         break
//     case 'may':
//         alert('The season is Spring')
//         break
//     case 'june':
//         alert('The season is Summer')
//         break
//     case 'july':
//         alert('The season is Summer')
//         break
//     case 'august':
//         alert('The season is Summer')
//         break
//     default:
//         alert('Entered word is not a month.')
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// let day = prompt("What is the day today?"),
//     today = day.toLowerCase()

// if (today == 'saturday' || today == 'sunday'){
//     alert(`${today} is a weekend`)
// }else if (today == 'monday' || 
//             today == 'tuesday' ||
//             today == 'wednesday' ||
//             today == 'thursday' ||
//             today == 'friday' ){
//     alert(`${today} is a working day`)
// }else {
//     alert("You entered the wrong word.")
// }

// Exercise : Level 3
// 1. Write a program which tells the number of days in a month.
// let month = prompt('Enter a month:'),
//     monthDay = month.toLowerCase()

// if (monthDay == 'january' ||
//     monthDay == 'march' ||
//     monthDay == 'may' ||
//     monthDay == 'july' ||
//     monthDay == 'august' || 
//     monthDay == 'october' ||
//     monthDay == 'december'){
//         alert(`${monthDay} has 31 days.`)
//     }else if (monthDay == 'february'){
//         alert('February has 28 days.')
//     }else {
//         alert(`${monthDay} has 30 days.`)
//     }


