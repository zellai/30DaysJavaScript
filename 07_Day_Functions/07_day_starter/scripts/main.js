// console.log(countries);
// alert('Open the console and check if the countries has been loaded')

/* Exercises: Level 1
1. Declare a function fullName and it print out your full name.

// function fullName(){
//     console.log("Ezel Mozo Espera");
// }
// fullName();

2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName, lastName){
//     console.log(firstName +" "+ lastName);
// }
// fullName("Ezel" ,"Mozo");

3. Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(num1, num2){
//     return num1 + num2;
// }
// console.log(addNumbers(2 ,5));

4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// function areaOfRectangle(length, width){
//     return length * width;
// }
// console.log(areaOfRectangle(2 ,5));

5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length, width){
//     return 2*(length + width);
// }
// console.log(perimeterOfRectangle(2 ,5));

6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// function volumeOfRectPrism(length, width, height){
//     return length * width * height;
// }
// console.log(volumeOfRectPrism(2 ,5, 10));

7. Area of a circle is calculated as follows: area = π x r x r. 
Write a function which calculates areaOfCircle

// function areaOfCircle(r){
//     return Math.PI * r * r;
// }
// console.log(areaOfCircle(5));

8. Circumference of a circle is calculated as follows: 
circumference = 2πr. Write a function which calculates circumOfCircle

// function circumOfCircle(r){
//     return 2 * Math.PI * r;
// }
// console.log(circumOfCircle(5));

9. Density of a substance is calculated as follows:density= mass/volume. 
Write a function which calculates density.

// function density(mass, volume){
//     return mass / volume;
// }
// console.log(density(32, 2));

10. Speed is calculated by dividing the total distance covered 
by a moving object divided by the total amount of time taken. 
Write a function which calculates a speed of a moving object, speed.

// function Speed(distance, time){
//     return distance / time;
// }
// console.log(Speed(32, 2));

11. Weight of a substance is calculated as follows: 
weight = mass x gravity. Write a function which calculates weight.

// function Weight(mass, gravity = 9.81){
//     return mass * gravity + ' N';
// }
// console.log(Weight(32));

12. Temperature in oC can be converted to oF using this formula: 
oF = (oC x 9/5) + 32. Write a function which convert oC to 
oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(oC){
//     return ((oC * 9/5) + 32);
// }
// console.log(convertCelsiusToFahrenheit(32));

13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups 
in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese 
based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

// function bmi(weight, height){

//     let bmi = weight / height*height;
//     console.log(bmi);

//     if(bmi < 18.5){
//         console.log("Underweight");
//     } 
//     else if(bmi >= 18.5 && bmi < 24.9){
//         console.log("Normal");
//     }
//     else if((bmi >= 25) && (bmi < 29.9)){
//         console.log("Overweight");
//     }
//     else if(bmi >= 30){
//         console.log("Obese");
//     }
// }
// bmi(25,5);

14. Write a function called checkSeason, it takes a month parameter 
and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){
    switch(month){
        case "january":
            console.log("Winter");
            break;
        case "february":
            console.log("Winter");
            break;
        case "march":
            console.log("Spring");
            break;
        case "april":
            console.log("Spring");
            break;
        case "may":
            console.log("Spring");
            break;
        case "june":
            console.log("Summer");
            break;
        case "july":
            console.log("Summer");
            break;
        case "august":
            console.log("Summer");
            break;
        case "september":
            console.log("Autumn");
            break;
        case "october":
            console.log("Autumn");
            break;
        case "november":
            console.log("Autumn");
            break;
        case "december":
            console.log("Winter");
            break;
    }
}
checkSeason("december");

15. Math.max returns its largest argument. Write a function findMax 
that takes three arguments and returns their maximum with out using 
Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0


// function findMax(num1,num2,num3){
//     let max = Math.max(num1,num2,num3);
//     return max;
// }

// console.log(findMax(0, -10, -2));

*/

/* Exercises: Level 2
1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function linear(x,y,a,b,c){
//     let equation = a*x + b*y + c;
//     return equation;
// }

// console.log(linear(2,3,1,2,3));

2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// function quadratic(a,b,c){
//     var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a); 
//     var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a); 
//     return "(" + result+ ", " + result2 + ")";
// }

// console.log(quadratic(1,-1,-2));

3. Declare a function name printArray. It takes array as a parameter 
and it prints out each value of the array.

// function printArray(arr){
//     for(const arrs of arr){
//         console.log(arrs);
//     }
// }
// printArray(countries);

4. Write a function name showDateTime which shows time in this 
format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08

// function showDateTime() {
//     // Create a new Date object
//     var currentDate = new Date();

//     // Get the components of the date and time
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1; // Months are zero-based
//     var year = currentDate.getFullYear();
//     var hours = currentDate.getHours();
//     var minutes = currentDate.getMinutes();

//     // Format the components to have leading zeros if needed
//     day = day < 10 ? '0' + day : day;
//     month = month < 10 ? '0' + month : month;
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     // Construct the formatted date and time string
//     var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

//     // Display the result
//     console.log(formattedDateTime);
// }

// // Call the function to show the current date and time
// showDateTime();

4.5 Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

// function swapValues(x,y){
//     num1 = x;
//     num2 = y;
//     y = num1;
//     x = num2;
//     console.log("x => " + x +", y => " + y );
// }
// swapValues(4,5);

4.6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// function reverseArray(arr){
//     let ars = [];
//     for(let i=arr.length-1; i>=0; i--){
//         ars.push(arr[i]);
//     }console.log(ars);
// }


5. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

6. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

7. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

8. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

9. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

10. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

11. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.


12. Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
Writ a function which generates a randomUserIp.

13. Write a function which generates a randomMacAddress

14. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'

15. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/


