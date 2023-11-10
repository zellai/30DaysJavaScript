<<<<<<< HEAD
let number = prompt('Enter number', 'number goes here')
console.log(number)
=======
// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = 'Ezel',
//     lastName = 'Mozo',
//     country = 'Phillippines',
//     city = 'Butuan City',
//     age = 33,
//     isMarried = true,
//     year = new Date().getFullYear()

// console.log(typeof(firstName))
// console.log(typeof(lastName))
// console.log(typeof(country))
// console.log(typeof(city))
// console.log(typeof(age))
// console.log(typeof(isMarried))
// console.log(typeof(year))

// 2. Check if type of '10' is equal to 10

// console.log(typeof('10') == 10)

// 3. Check if parseInt('9.8') is equal to 10

// console.log(parseInt('9.8') == 10)

// 4. Write three JavaScript statement which provide truthy value.
// console.log(3>=2)
// console.log(5 != 4)
// console.log('avon'.length == 'ibon'.length)

// Write three JavaScript statement which provide falsy value.
// console.log(12<3)
// console.log(54 != 54)
// console.log('assasin'.length != 'almasin'.length)

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// let i = 4 > 3, //true
//     ii = 4 >= 3, //true
//     iii = 4 < 3, //false
//     iv = 4 <= 3, //false
//     v = 4 == 4, //true
//     vi = 4 === 4, //true
//     vii = 4 != 4, //false
//     viii = 4 !== 4, //false
//     ix = 4 != '4', //false
//     x = 4 == '4', //true
//     xi = 4 === '4' //false

// Find the length of python and jargon and make a falsy comparison statement.
// console.log(i)
// console.log(ii)
// console.log(iii)
// console.log(iv)
// console.log(v)
// console.log(vi)
// console.log(vii)
// console.log(viii)
// console.log(ix)
// console.log(x)
// console.log(xi)
// console.log('python'.length != 'jargon'.length)

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// let i = 4 > 3 && 10 < 12, //true
//     ii = 4 > 3 && 10 > 12, //false
//     iii = 4 > 3 || 10 < 12, //true
//     iv = 4 > 3 || 10 > 12, //true
//     v = !(4 > 3), //false
//     vi = !(4 < 3), //true
//     vii = !(false), //true
//     viii = !(4 > 3 && 10 < 12), //false
//     ix = !(4 > 3 && 10 > 12), //true
//     x = !(4 === '4') //true
// There is no 'on' in both dragon and python //false
// console.log(i)
// console.log(ii)
// console.log(iii)
// console.log(iv)
// console.log(v)
// console.log(vi)
// console.log(vii)
// console.log(viii)
// console.log(ix)
// console.log(x)

// 7. Use the Date object to do the following activities

// let now = new Date()

// console.log(now.getFullYear())
// console.log(now.getMonth() + 1)
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(Date.now())

// Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
// let base = prompt('Enter base:', 'Input number'),
//     height = prompt('Enter height:', 'Input number'),
//     area = 0.5 * base * height
//     alert(`The area of the triangle is ${area}`)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let a = prompt('Enter side a:', 'Enter number'),
//     b = prompt('Enter side b:', 'Enter number'),
//     c = prompt('Enter side c:', 'Enter number'),
//     perimeter = +a + +b + +c
//     alert(`The perimeter of the triangle is ${+perimeter}`)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let l = prompt('Enter the length of the rectangle:', 'Enter Number'),
//     w = prompt('Enter the width of the rectangle:', 'Enter Number'),
//     perimeter = 2 *(+l + +w)
//     alert(`The perimeter of the rectangle is ${perimeter}`)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let r = prompt('Enter the radius:', 'Enter number')
// const pi = 3.14
// let area = 2*pi*r
// alert(`The area of the circle is ${area}`)

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = 0,
//     yIntercept = 2*x - 2,
//     slope = 2,
//     xIntercept = (2 + 0)/2
// console.log(`y-intercept: ${yIntercept}`)
// console.log(`x-intercept: ${xIntercept}`)
// console.log(`Slope: ${slope}`)

// // 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// let y1 = 2,
//     y2 = 10,
//     x1 = 2,
//     x2 = 6
//     m = (y2-y1)/(x2-x1)
// console.log(`Slope: ${m}`)

// 7. Compare the slope of above two questions.

// console.log(m === slope)

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = prompt('Enter the value of x:', 'Enter number'),
//     y = x**2 + 6*x + 9
//     alert(`The value of y is ${y}`) // -3

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hrs = prompt('Enter hours:','Enter number'),
//     rate = prompt('Enter rate per hour:', 'Enter number'),
//     ern = hrs * rate
//     alert(`Your weekly earning is ${ern}`)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = prompt('Enter name:', 'Your name here')
//     if (name.length > 7){
//         alert('Your name is long')
//     }else {
//         alert('Your name is Short')
//     }

// 11. Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// if (firstName.length > lastName.length){
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }else {
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// let gap = myAge-yourAge

// console.log(`I am ${gap} years older than you.`)

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let byear= prompt('Enter birth year: ', 'Enter here'),
//     age = 2023 - byear,
//     yeargap = 18 - age

//     if (age >= 18){
//         alert(`You are ${age}. You are old enough to drive`)
//     }else {
//         alert(`Your are ${age}. You will be allowed to drive after ${yeargap}.`)
//     }

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let age = prompt('Enter number of years you live:', 'Enter number'),
//     seconds = 31536000 * age
//     alert(`You lived ${seconds} seconds`)

// 15. Create a human readable time format using the Date time object

// let now = new Date(),
//     year = now.getFullYear(),
//     month = now.getMonth() + 1,
//     date = now.getDate(),
//     hrs = now.getHours(),
//     min = now.getMinutes()

// console.log(`${year}-${month}-${date} ${hrs}:${min}`)
// console.log(`${date}-${month}-${year} ${hrs}:${min}`)
// console.log(`${date}/${month}/${year} ${hrs}:${min}`)

// Exercises: Level 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    date = now.getDate(),
    hrs = now.getHours() ,
    min = now.getMinutes()
    hour = now.getHours()-12
    


    if ((hrs > 12)&&(min < 10)){
        console.log(`${year}-${month}-${date} 0${hour}:0${min}`)
    }if ((hrs > 12)&&(min > 10)){
        console.log(`${year}-${month}-${date} 0${hour}:${min}`)
    } else{
    console.log(`${year}-${month}-${date} ${hrs}:${min}`)
    }











>>>>>>> b6455c5378734311743977a4372ba94df22f34f5
