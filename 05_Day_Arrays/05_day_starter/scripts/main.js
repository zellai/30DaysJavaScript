console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log('Number of words:' , words.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.push('Sugar')
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.splice(4,5,'Sugar')
console.log(shoppingCart)

shoppingCart[3]= 'Green Tea'
console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const hasCountry = countries.includes('Ethiopia')
if (hasCountry == true){
    console.log('ETHIOPIA')
}else {
    countries.splice('Ethiopia')
    console.log(countries)
}


// 5. In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const hasSass = webTechs.includes('Sass')
if (hasSass == true){
    console.log('Sass is a CSS preprocess')
}else {
    webTechs.push('Sass')
    console.log(webTechs)
}

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// LEVEL 3
// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log(ages)
len = ages.length
console.log(len)
console.log('Min: '.concat(ages[0]).concat(' Max: ').concat(ages[len-1]))
// Find the median age(one middle item or two middle items divided by two)
console.log('Median: '.concat(ages[len/2]))
// Find the average age(all items divided by number of items)
const initialValue = 0;
const totalAge = ages.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
const ave = totalAge/len
console.log('Average: ' + ave)
// Find the range of the ages(max minus min)
const range = ages[len-1] - ages[0]
console.log('Range of the ages: '+ range)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
function difference(a, b) {
    return Math.abs(a - b);
  }
  console.log(difference(ages[0], ave));
  console.log(difference(ages[len-1], ave));

// 1.Slice the first ten countries from the countries array
console.log(countries)
console.log(countries.slice(0,10))
// 2. Find the middle country(ies) in the countries array
const midLen = countries.length/2
// console.log(midLen)
console.log(countries[midLen-.5])
// 3. Divide the countries array into two equal arrays if it is even. 

// If countries array is not even , one more country for the first half.
