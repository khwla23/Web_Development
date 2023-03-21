// ----------Module Export, Import
// import
import {capitalize, getLen} from '../task2';

// -----------Arrow function
var multi = (x,y) => x*y;

const ans = (multi(2,3));

//----------Destructing
// instead of writing .name, .age do this
let {name, age, occupations} = person;

const vehicles = ['A', 'B', 'C'];
//instead of 
var car = vehicles[0];
var truck = vehicles[1];
//Write this
const [car, truck, van] = vehicles;
console.log(truck);

//----------Spread operator
 const numbers1 = [1, 2, 3 , 4];
 const numbers2 = [5, 6, 7, 8];
const numbersCombined = [...numbers1, ...numbers2]
cnsole.log(numbersCombined)

// export
export default ans;
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const getLen = (str)=>{
    return str.length;
}
