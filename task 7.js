//my current age
const myAge = 21;
//2 years is as 10.5 in dog
var earlyyears = 1;

earlyyears *= 10.5;
//2 years less in me
var lateryears = myAge-2;
//inc lateryears by 4
lateryears=lateryears*4;
//Finding MyAgeInDogYears
var myAgeInDogYears =earlyyears+lateryears;
//get my name
var myName="Soumya";

myName = myName.toLowerCase();
 
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);
