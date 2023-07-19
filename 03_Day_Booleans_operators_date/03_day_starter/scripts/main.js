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
let a = prompt('Enter side a:', 'Enter number'),
    b = prompt('Enter side b:', 'Enter number'),
    c = prompt('Enter side c:', 'Enter number'),
    perimeter = +a + +b + +c
    alert(`The perimeter of the triangle is ${+perimeter}`)






