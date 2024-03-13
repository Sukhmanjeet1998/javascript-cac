// console.log("Date and Time");

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getDay());
// console.log(myDate.getMonth()+1);

// year,month,day
let createDate = new Date(2024,8,6);
let createDatetime = new Date(1998,8,6,13,45);
// console.log(createDate.toDateString());
// console.log(createDatetime.toLocaleString());

// from 1970 to current in miilisecnds
let nowdatetime = Date.now();
// console.log(nowdatetime);
// console.log(createDatetime.getTime());

// Convert milliseconds to seconds
// console.log(Math.floor(nowdatetime/1000));
