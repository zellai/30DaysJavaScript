// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

/* Exercises: Level 1
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo.

*/

const dog = {
    name : 'Lasey',
    legs : 4,
    color : 'Brown',
    age : 1,
    bark: function() {
        return 'woof woof';
    }
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = 'teacup pomeranian'

dog.getDogInfo = function(){
    let statement = `${this.name} is a ${this.breed}.\nHe has ${this.legs} legs.\nHe likes to ${this.bark()}.`
    return statement;
}
console.log(dog);
console.log(dog.getDogInfo());