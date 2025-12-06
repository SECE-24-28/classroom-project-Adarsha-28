console.log(a);
//hoisting
var a=10;
//global or funciton scope
console.log(typeof a);

//ES6
//let and const
//console.log(b);
//reference error
//temporal dead zone
let b=20;
b=140;
//Block scope
console.log(b);

//{
//  let b=30;
//  console.log(b);
//}

// console.log(c);
const c=40;
// c=70;
console.log(c);

//namedFunc();
//calling func before declaration

//functions
//1.Named functions
//func declaration
function namedFunc(){
    console.log("Named func called");
    console.log("Named func called");
    console.log("Named func called");
}

//func call or invocation
namedFunc();

// funcexp();
// Type error will get if we call before this one
//2.Function Expression
var funcexp = function(){
    console.log("Func expression called");
}

funcexp();

//3.Arrow functions(ES6)
let arrow = ()=>{
    console.log("Arrow expression called");
}
arrow();

//4. Callback func and 
/* 5. IIFE(Immediately Invoked function expression)
An IIFE is a function that runs immediately after it is defined. It’s wrapped in parentheses and invoked right away.*/

(()=>(
    console.log("Callback and life function called")
))();

const addTwoNumbers = (parameter1,parameter2) => {
    let num1 = parameter1||20;
    let num2=parameter2;
    let sum =num1+num2;
    // console.log("The sum of two numbers: ",sum);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
//if we not pass we get undefined for var default value for let
addTwoNumbers(20,50);
addTwoNumbers(40,50);
addTwoNumbers(4);
//NaN

const subTwoNumbers = (parameter1,parameter2) => {
    let num1 = parameter1||20;
    let num2=parameter2;
    let sub =num1-num2;
    console.log(`The Difference of two numbers: ${sub}`);
    //template literals
}
subTwoNumbers(40,50);

const mulTwoNumbers = (parameter1,parameter2) => {
    let num1 = parameter1||20;
    let num2=parameter2;
    let mul =num1*num2;
    console.log("The Product of two numbers: ",mul);
}
mulTwoNumbers(4,5);
mulTwoNumbers();

const divTwoNumbers = (parameter1,parameter2) => {
    let num1 = parameter1||20;
    let num2=parameter2;
    let div =num1/num2;
    console.log("The Division of two numbers: ",div);
}
divTwoNumbers(100,50);


let a1="10";
let b1=2;
console.log(a1+b1);

let a2=10;
let b2="2";
console.log(a1-b1);
console.log(2 == "2");
console.log("2===\"2\"",2 === "2");


let c1 = [1,2,3,"ass"];
let d1 = [1,2,3,"ass"];
console.log(c1==d1);
console.log(c1===d1);
console.log(c1[0]===d1[0]);

//for loop
//dont get any new array, make changes in pervious array
for(let i=0;i<c1.length;i++){
    console.log(i,c1[i]);
}

//forEach
c1.forEach((Element,index) => {
    console.log(Element,index);
});

//map => creates new array(used in react,returns something)
    let arr =[1,2,3,4,5,6];
    /*let aa = arr.map((el,ind) => {
        return el+ind;
    });*/
    let aa = arr.map((el,ind) =>el+ind);
    console.log(arr);
    console.log(aa);

    let s= [1,2,3,4,5,6,7,8,9];
//filter: truthy values, based on condition
let b3 = s.filter((el)=>{
    return el%2 ===1;
});
console.log(b3);

let b4 = s.filter((el,ind)=>{
    return ind>4;
});
console.log(b4);

//reduce: single value from array
let z = s.reduce((acc,el,index)=>{
    console.log(acc,el);
    return acc+el;
},200);
console.log(z);
//default accumumlator(acc) is 1

let array = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
let x = array.map((name)=>{
    return name.username;
});
console.log(x);

let y = array.filter((el)=>{
    // console.log(el);
    return el.id%2 === 0;
})
.map((el)=>el.name)
.join(" ");
console.log(y);