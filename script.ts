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

// func type

const myfunc  = (a:string , b:string) =>{

    console.log(`Hello ${a} & ${b}`)

}

myfunc("Saif","Akib")



// func alises


type stringornum = string | number;

const saiffunc = (name:stringornum) =>{

    return name;

    

}

console.log(saiffunc(123124))

// interfaces

interface draw{

    width:number;
    length:number;
}

let Rectangle = (options:draw)=>{

    let width = options.width;
    let length = options.length;


    return options.width*options.length;
    
}


// Rectangle({
//     width:10,
//     length:20
// })

console.log(Rectangle({width:10,length:20}))



// Generics

const addID = <T>(obj:T)=>{
    let id = Math.random()*100;
    return{...obj,id}
};

let user =  addID({
  name:"Shakib",
  age:40,
  country:"Bangladesh"
});

console.log(user.name,user.country)


interface APIResponce<T>{
    status:number;
    type:string;
    data:T
}

const response1: APIResponce<number> = {
    status:200,
    type:"saif",
    data:102
}

console.log(response1);

