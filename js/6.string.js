// console.log("String");

let _myname = "Sukhmanjeet";
let sirname = "Singh";

// console.log(_myname+sirname);

let myname = _myname+sirname;
// console.log(myname[0]);

/*
String Literals
String interpolation is injecting a expresion in a string
*/

// console.log(`Hi my name is ${myname}`);

let city = new String("shahjahanpur");
// console.log(city);

// console.log(city, city.length);
// console.log(city.toLocaleUpperCase());

// console.log(city.charAt(4));
// console.log(city.indexOf('f'));
// console.log(city.indexOf('j'));


/* Both slcie and substring have same functionality but slice also support negative indexing */
let new_slice_str = city.slice(0,5);
// console.log(new_slice_str);

let sub_str = city.substring(0,5);
// console.log(sub_str);

let space_str = "     space string in mail or entering other data   ";
// console.log(space_str);
// console.log(space_str.trim());

let url = "hello@abc%20def.com";

let new_url = url.replace("%20","-");
// console.log(url);
// console.log(new_url);

// console.log(url.includes("def"));
// console.log(url.includes("defg"));

let split_str = "Hello-world-javascript";
// console.log(split_str.split("-"));
