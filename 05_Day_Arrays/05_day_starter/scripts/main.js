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