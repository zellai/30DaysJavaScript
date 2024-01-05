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

// for(const country in countries){
//   console.log('Country Name: ' + countries[country].name)
//   console.log('Capital: ' + countries[country].capital)
//   console.log('Populations: ' + countries[country].population)
//   console.log('Language: ' + countries[country].languages +"\n\n")
// }

// ---------------------------------------------------------------
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

/* Exercises: Level 3
1. Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties 
and it has totalIncome, totalExpense, accountInfo,addIncome, 
addExpense and accountBalance methods. Incomes is a set of 
incomes and its description and expenses is a set of incomes
 and its description.
*/

// const personAccount = {
//   firstName: 'Ezel',
//   lastName: 'Espera',
//   incomes: {
//     income1: 10000,
//     income2: 10000,
//     income3: 20000
//   },
//   expenses: {
//     food: 8000,
//     bills: 11000,
//     eatOut: 1000,
//     allowance: 4400
//   },

//   totalIncome: function(){
//     return Object.values(this.incomes).reduce((total, income) => total + income, 0);
//   },

//   totalExpenses: function(){
//     return Object.values(this.expenses).reduce((total, expense) => total + expense, 0);
//   },

//   accountInfo: function(){
//     return `Account Name: ${this.firstName} ${this.lastName}`
//   }
// }
// // Call the totalIncome function
// const totalIncomeValue = personAccount.totalIncome();
// const totalExpensesValue = personAccount.totalExpenses();
// const accountInformation = personAccount.accountInfo();
// const balance = totalIncomeValue-totalExpensesValue;

// console.log("Total Income:", totalIncomeValue);
// console.log("Total Expenses:", totalExpensesValue);
// console.log(accountInformation);
// console.log("Account Balance: ", balance);

/* 2. Imagine you are getting the above users collection from 
a MongoDB database.
a. Create a function called signUp which 
allows user to add to the collection. If user exists, inform 
the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application.

*/

// Function to sign up a new user
// function signUp(username, email, password) {
//   // Check if the user already exists
//   for(const user in users){
//     // console.log(users[user].username);
//     if (users[user].username == username) {
//       console.log(`User '${username}' already has an account.`);
//     } else {
//       // Add the new user to the collection
//       users[username] = {
//         email,
//         password,
//         // Add any other properties you want for the new user
//       }
//     }
//   };
//     console.log(`User '${username}' has been successfully registered.`);
  

// }

// // Function to sign in a user
// function signIn(username, password) {
//   // Check if the user exists
//   if (users.hasOwnProperty(username)) {
//     // Check if the password matches
//     if (users[username].password === password) {
//       console.log(`User '${username}' has successfully signed in.`);
//     } else {
//       console.log(`Incorrect password for user '${username}'.`);
//     }
//   } else {
//     console.log(`User '${username}' does not exist.`);
//   }
// }

// // Example usage:
// signUp('Alex', 'john@alex.com', '123123');
// signIn('Alex', '123123');

/* 3. The products array has three elements and each of them has 
six properties. 
a. Create a function called rateProduct which rates 
the product 
b. Create a function called averageRating which calculate 
the average rating of a product.
*/
function rateProduct(description,userId, rate){
  for(let i=0; i<products.length;i++){
    if(products[i].description == description){
      products[i].ratings.push({
        userId,
        rate
      })
    }
  }
}
// console.log(products);

// rateProduct('Smart TV:Procaster','jhnbjh', 6);
// rateProduct('Smart TV:Procaster','jhkjjh', 7);
// rateProduct('MacPro: System Darwin','jhnbjh', 10);

// // Function to calculate the average rating of a product
// function averageRating(product) {
//   const { ratings } = product;

//   if (ratings.length === 0) {
//     return 0; // If there are no ratings, return 0 as the average.
//   }
//   const totalRating = ratings.reduce((sum, rating) => sum + rating.rate, 0);
//   return totalRating / ratings.length;
// }

// // Example usage:
// products.forEach(product => {
//   const avgRating = averageRating(product);
//   console.log(`Average rating for ${product.name}: ${avgRating}`);
// });


// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

//   const products = [
// {
//   _id: 'eedfcf',
//   name: 'mobile phone',
//   description: 'Huawei Honor',
//   price: 200,
//   ratings: [
//     { userId: 'fg12cy', rate: 5 },
//     { userId: 'zwf8md', rate: 4.5 }
//   ],
//   likes: []
// },
// {
//   _id: 'aegfal',
//   name: 'Laptop',
//   description: 'MacPro: System Darwin',
//   price: 2500,
//   ratings: [],
//   likes: ['fg12cy']
// },
// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
// }
// ]




