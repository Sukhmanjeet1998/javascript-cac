// console.log("Arrays");

let myarr = [1,2.2,"Sukh",true,BigInt(999),undefined];
// console.log(myarr);

myarr.push(5);
// console.log(myarr);

myarr.pop();
// console.log(myarr);

myarr.unshift(0);
// console.log(myarr);

myarr.shift();
// console.log(myarr);


// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

// console.log(myarr.includes(1));
// console.log(myarr.indexOf(1));


const new_arr = myarr.join();

// console.log(myarr);
// console.log(new_arr, typeof new_arr);


let array_ = [0,1,2,3,4,5];

// Didn't effect the original array
let arr1 = array_.slice(1,3);
// console.log(array_);
// console.log("Slice: ",arr1);

// Effect the original array and remove the elements from starting index to given index 
let arr2 = array_.splice(1,3);
// console.log(array_);
// console.log("Splice: ",arr2);

const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","batman","flash"];

const all_herore = marvel_heroes.concat(dc_heroes);
// console.log(all_herore);

// spread opr (...))
const all_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_heroes);

// flat()
const another_arr = [0,1,2,3,[4,5],6,[7,8,[9]]];
const real_another_arr = another_arr.flat(Infinity);
// console.log(real_another_arr);

// convert to array
// console.log(Array.isArray("String"));
// console.log(Array.from("String"));  
console.log(Array.from(
    {
        name_ : "Sukhman"
    }
));  

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
