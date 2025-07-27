let person = {
    name:"saif",
    id:102,
}

console.log(person)

const up= "saif"

console.log(up)

let a:string[] = []

a.push("asif")

console.log(a);


//  UNION

let b:(number | string)[] = []

b.push(12,"taif")

console.log(b)


// TYPE DEFINE

 let c:{

    name: string,
    id: number,
    mail:string,

}

c = {
    name:"tanvir",
    id:109,
    mail:"saimumsaif62@gmail.com"

}

console.log(c)