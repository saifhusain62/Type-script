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
// Generics
const addID = (obj) => {
    let id = Math.random() * 100;
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Shakib",
    age: 40,
    country: "Bangladesh"
});
console.log(user.name, user.country);
const response1 = {
    status: 200,
    type: "saif",
    data: 102
};
console.log(response1);
// ENUM TYPE
var Rtype;
(function (Rtype) {
    Rtype[Rtype["school"] = 0] = "school";
    Rtype[Rtype["college"] = 1] = "college";
    Rtype[Rtype["versity"] = 2] = "versity";
    Rtype[Rtype["national"] = 3] = "national";
})(Rtype || (Rtype = {}));
const responce2 = {
    start: 123,
    types: Rtype.national,
    datas: "saif"
};
console.log(responce2);
