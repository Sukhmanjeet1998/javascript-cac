// console.log("Hi");

// Stack (Primitive datatype)  ......................................
let myname = "Sukhman";
let mycollagename = myname;

mycollagename = "Sukhmanjeet Singh";

// console.log(myname);
// console.log(mycollagename);   // here a value has been made that store in mycollagename variable not the reference

// JavaScript stores the actual value in the variable rather than a reference to the value. This is different from objects and arrays, where variables store references to the actual data stored in the heap.

// Heap (Non Primitive Datatype (Reference))....................
let obj1 = {
    myname : "Sukhman",
    age : 25
};

let obj2 = obj1;  
// variables store references to the actual data stored in the heap.

obj2.age = 26;

// console.log(obj1);
// console.log(obj2);