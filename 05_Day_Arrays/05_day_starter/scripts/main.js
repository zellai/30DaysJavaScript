
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// Exercise : Level 1
// 1. Declare an empty array;
let empty = Array()
console.log(empty)
// 2. Declare an array with more than 5 number of elements
let arr = Array(6)
console.log(arr.fill(4))
// 3. Find the length of your array
console.log('Length:', arr.length)
// 4. Get the first item, the middle item and the last item of the array
console.log('First item:', countries[0])
console.log('Middle item:', countries[(countries.length -1) /2 ])
console.log('Last item:', countries[countries.length - 1])
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Kenchin',
    2019,
    true,
    [1,2,3,4],
    {family: ['Liyah','King','Ezel'] },
    {Age: 32, city: 'Surigao'}
]

console.log('MixedDataTypes Length:', mixedDataTypes.length)
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 7. Print the array using console.log()
console.log(itCompanies)
// 8. Print the number of companies in the array
console.log('Number of Companies:', itCompanies.length)
// 9. Print the first company, middle and last company
console.log('First company:', itCompanies[0])
console.log('Middle Company:', itCompanies[(itCompanies.length-1)/2])
console.log('Last Company:', itCompanies[itCompanies.length -1])
// 10. Print out each company
console.log(itCompanies.join('\n'))
// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies.join('\n').toUpperCase())
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join() ,'are big IT companies.')
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Facebook',
    certainCompany = itCompanies.includes(company)
// console.log(certainCompany)
if (certainCompany == false){
    console.log('The company is not found')
}else{
    console.log(company)
}
// 14. Filter out companies which have more than one 'o' without the filter method



