// ----------Module Export, Import
// import
import {capitalize, getLen} from '../task2';
console.log("hi, khwla. its task 2.")
// -----------Arrow function
var multi = (x,y) => x*y;
const ans = (multi(2,3));

//----------Destructing
// instead of writing .name, .age do this
const person = {
    name : "khwla",
    age : 21,
    occupation: 'developer'
 }
let {name, age, occupations} = person;
console.log(name, age, occupation)

const vehicles = ['A', 'B', 'C'];
//instead of 
var car = vehicles[0];
var truck = vehicles[1];
//Write this, square brackets for array, and curly for object
const [car, truck, van] = vehicles;
console.log(truck);

//----------Spread operator
 const numbers1 = [1, 2, 3 , 4];
 const numbers2 = [5, 6, 7, 8];
const numbersCombined = [...numbers1, ...numbers2]
console.log(numbersCombined)

// copy of object
const circle ={
    radius : 10,
    style: {
        color : 'blue'
    }
};

const clonedCircle = {
    ...circle
}

console.log(clonedCircle)

// 5) ------ Nullish Coalescing operator (when we are only concerned with the true statement)
// it is kinda like a ternary condition. traditional ternary operation is (cond) ? true_stat : false_stat
let num = 10;
(num > 5) ?? true;

// 6) ----- Map Function
const people = [
    {
        name : "khwla",
        age : 21,
        occupation: 'developer'
    },
    {
        name : "anii",
        age : 19,
        occupation: 'data analyst'
    },
    {
        name : "faizan",
        age : 22,
        occupation: 'Cyber Security'
    },
    {
        name : "fahad",
        age : 28,
        occupation: 'Cyber Security'
    }
]

people.length
? people.map((per , i)=> (
    console.log("Person Name "+ i +" : "+ per.name)
))
: console.log("No people")

// 7) ------ Filter
//people.filter(per => per.age > 40)
console.log("I am using filters\nFollowing are the name of person above 20.")
people.length
? people
.filter(per => per.age > 20)
.map((per , i)=> (
    console.log("Person Name "+ i +" : "+ per.name)
))
: console.log("No people")

// 8) --------- Sets
//when we want the unique value and don't wanna see duplicate values.
const getOccupations = () => {
    const occupations = []
    people.map(per => {
        occupations.push(per.occupation)
    })
    console.log('Occupations: '+ occupations)
    console.log("after using set")
    console.log('Occupations: '+ [...new Set(occupations)]) //agr yahan spread out in array nhi kreen gaye tu output mein :object set likha aye ga only.
}

getOccupations();

// export
export default ans;
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const getLen = (str)=>{
    return str.length;
}
