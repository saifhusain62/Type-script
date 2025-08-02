"use strict";
let person = {
    name: "saif",
    id: 102,
};
console.log(person);
const up = "saif";
console.log(up);
let a = [];
a.push("asif");
console.log(a);
//  UNION
let b = [];
b.push(12, "taif");
console.log(b);
// TYPE DEFINE
let c;
c = {
    name: "tanvir",
    id: 109,
    mail: "saimumsaif62@gmail.com"
};
console.log(c);
// func type
const myfunc = (a, b) => {
    console.log(`Hello ${a} & ${b}`);
};
myfunc("Saif", "Akib");
const saiffunc = (name) => {
    return name;
};
console.log(saiffunc(123124));
let Rectangle = (options) => {
    let width = options.width;
    let length = options.length;
    return options.width * options.length;
};
// Rectangle({
//     width:10,
//     length:20
// })
console.log(Rectangle({ width: 10, length: 20 }));
