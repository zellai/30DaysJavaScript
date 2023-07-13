// Exercise: Level 1
// let challenge = ' 30 Days of JavaScript '
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(3,4))
// console.log(challenge.substring(0,2))
// console.log(challenge.includes('Script'))
// console.log(challenge.split())
// console.log(challenge.split(' '))

// let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(string.split(', '))

// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt('J'))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

// let str = 'You cannot end a sentence with because because because is a conjunction'
// console.log(str)
// console.log(str.indexOf('because'))
// console.log(str.lastIndexOf('because'))
// console.log(str.search('because'))

// console.log(challenge)
// console.log(challenge.trim())
// console.log(challenge.startsWith(' 30'))
// console.log(challenge.endsWith('JavaScript '))
// console.log(challenge.match('a'))

// let conc = '30 Days of'
// console.log(conc.concat(' JavaScript'))
// console.log(challenge.repeat(2))

// Exercise: Level 2
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// let x = '10'
// let y = '9.8'
// let num = parseFloat(y)
// console.log(x == 10)
// // console.log(num)
// console.log(Math.ceil(num) == 10)

// let str1 = 'python'
// let str2 = 'jargon'
// console.log(str1.match('on'))
// console.log(str2.match('on'))

// let str3 = 'I hope this course is not full of jargon'
// console.log(str3.match('jargon'))

// console.log(Math.floor(Math.random()* 101))

// const randomNumber = Math.floor(Math.random() * 51) + 50;
// console.log(randomNumber);
// console.log(Math.floor(Math.random()*256))

// // Access the 'JavaScript' string characters using a random number.

// let js = 'JavaScript'
// let numjs = Math.floor(Math.random()*js.length)
// console.log(js[numjs])

// // Use console.log() and escape characters to print the following pattern.
// console.log('1 1 1 1 1')
// console.log('2 1 2 4 8')
// console.log('3 1 3 9 27')
// console.log('4 1 4 16 64')
// console.log('5 1 5 25 125')

// // Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction'
// console.log(str.search('because'))
// console.log(str.substr(31,23))


// Exercise: Level 3

//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let lword = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(lword.match(/love/gi))

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str.match(/because/gi))

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
let reg = sentence.replace(/%/gi,'')
let reg1 = reg.replace(/\$/gi,'')
let reg2 = reg1.replace(/@/g,'')
let reg3 = reg2.replace(/&/gi,'')
let reg4 = reg3.replace('$','')
let reg5 = reg4.replace(/#/g,'')
let reg6 = reg5.replace(/;/g,'')
console.log(reg6) 

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = text.match(/\d+/g)
let income1 = +income[0]*12;
const income2 = +income[1];
const income3 = +income[2]*12;
const annualIncome = income1 + income2 + income3;
console.log(annualIncome)

