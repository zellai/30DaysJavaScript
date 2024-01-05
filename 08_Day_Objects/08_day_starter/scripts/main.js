// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

/* Exercises: Level 1
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo.

*/

// const dog = {
//     name : 'Lasey',
//     legs : 4,
//     color : 'Brown',
//     age : 1,
//     bark: function() {
//         return 'woof woof';
//     }
// }
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

// dog.breed = 'teacup pomeranian'

// dog.getDogInfo = function(){
//     let statement = `${this.name} is a ${this.breed}.\nHe has ${this.legs} legs.\nHe likes to ${this.bark()}.`
//     return statement;
// }
// console.log(dog);
// console.log(dog.getDogInfo());

/*Exercises: Level 2
1. Find the person who has many skills in the users object.

// function findPersonWithMostSkills(users) {
//     let maxSkillsCount = 0;
//     let personWithMostSkills = null;

//     for (const user in users) {
//         const skillsCount = users[user].skills.length;

//         if (skillsCount > maxSkillsCount) {
//             maxSkillsCount = skillsCount;
//             personWithMostSkills = user;
//         }
//     }

//     return personWithMostSkills;
// }


// const personWithMostSkills = findPersonWithMostSkills(users);

// if (personWithMostSkills) {
//     console.log(`${personWithMostSkills} has the most skills.`);
// } else {
//     console.log("No user found.");
// }

2. Count logged in users, count users having greater than equal to 50 points from the following object.

// function countUsersWithPointsAbove50(users) {
//     let count = 0;
//     // let personWithMostSkills = null;

//     for (const user in users) {
//         const pointsCount = users[user].points;

//         if (pointsCount >= 50) {
//             count++;
//         }
//     }
//     return count;
// }


// const numberPointsAbove50 = countUsersWithPointsAbove50(users);

// if (numberPointsAbove50) {
//     console.log(`The number who has 50 and above points is ${numberPointsAbove50}`);
// } else {
//     console.log("No user found.");
// }

3. Find people who are MERN stack developer from the users object

// // Function to check if a user is a MERN stack developer
// function isMERNStackDeveloper(user) {
//   const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];

//   return mernSkills.every(skill => user.skills.includes(skill));
// }

// // Find MERN stack developers
// const mernDevelopers = Object.keys(users).filter(username => isMERNStackDeveloper(users[username]));

// console.log("MERN stack developers:", mernDevelopers);


4. Set your name in the users object without modifying the original users object

// const copyUsers = Object.assign({}, users)
// copyUsers.Ezel = {
//   email: 'ezel@ezel.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//   age: 33,
//   isLoggedIn: false,
//   points: 50
// }

// console.log(copyUsers)

5. Get all keys or properties of users object

// console.log(Object.keys(users));

6. Get all the values of users object

// for(const user in users){
//   values = users[user];
//   console.log(values);
// }

7. Use the countries object to print a country name, capital, populations and languages.*/

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

console.log(countries)
for(const country in countries){
  console.log('Country Name: ' + countries[country].name)
  console.log('Capital: ' + countries[country].capital)
  console.log('Populations: ' + countries[country].population)
  console.log('Language: ' + countries[country].languages +"\n\n")
}





