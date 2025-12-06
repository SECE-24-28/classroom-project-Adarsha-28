// //1. Tag Selector
// let heading1 = document.getElementsByTagName("h1");
// console.log("Tag Selector:")
// console.log(heading1);
// //htmlCollection aray
// //console.log(heading1[1]);

// //2.Class Selector
// let cl = document.getElementsByClassName("a");
// //htmlCollection Array
// console.log("Class Selector:")
// //console.log(cl[0]);
// console.log(cl);

// //3.ID Selector
// let idd = document.getElementById("b");
// //It will return Single element and the first element
// console.log(idd);

// //4. Query Selector (it works on all three selectors)
// let sel = document.querySelector("#b");
// //let sel = document.querySelector(".a");
// //let sel = document.querySelector("h1");
// //it will return single element and the first element
// console.log(sel);

// //5. QuerySelectorAll
// let d = document.querySelectorAll("#b");
// //NodeListArray
// console.log(d[0]);



// //Read and Write Operation
// let head = document.querySelector("p");
// //Read op
// console.log(head.textContent);

// //Write op
// head.textContent = "This is the new paragraph content";
// console.log(head.textContent);
// //console.log(head);//returns first p tag fully

// let div = document.querySelector("p");
// //div.textContent = "<p>Hello from para</p>"
// div.innerHTML = "<p>Hello from para</p>"
// //console.log(div.innerHTML);
// console.log(div.textContent);



//add/remove/toggle class
let head = document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");

//Styling
let p = document.querySelector("p");
p.style.color = "red";
p.style.backgroundColor = "greenyellow";

//create list in html without html tags
//creating element
let ull = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "Item 1";
let li2 = document.createElement("li");
li2.textContent = "Item 2";
ull.appendChild(li1);
ull.appendChild(li2);
document.body.appendChild(ull);
//difficult for adding more items since we want to create each new list for every item better use array and foreach

let array = ["Apple","Banana","Mango"];
array.forEach((element)=>{
    let list = document.createElement("li");
    list.textContent = element;
    ull.appendChild(list);
});
