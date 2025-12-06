//get all the instances
let text = document.querySelector("#text");
let box = document.querySelector("#box");
let changeTextBtn = document.querySelector(".changeTextBtn");
let changeBgColor = document.querySelector(".changeBgColor");
let hideBox = document.querySelector(".hideBox");
let showBox = document.querySelector(".showBox");
let itemInput = document.querySelector("#itemInput");
let addItemBtn = document.querySelector("#addItem");
let ul = document.querySelector("#list");

changeTextBtn.addEventListener("click", ()=>{
    text.textContent = "Text has been changed!";
});

changeBgColor.addEventListener("click",()=>{
    if(box.style.backgroundColor === "skyblue") {
        box.style.backgroundColor = "#ddd";
    } else {
        box.style.backgroundColor = "skyblue";
    } 
});

hideBox.addEventListener("click",()=>{
    box.style.display = "none";
});

showBox.addEventListener("click",()=>{
    box.style.display = "flex";
});

addItemBtn.addEventListener("click",()=>{
    let list1 = document.createElement("li");
    list1.textContent = itemInput.value;
    ul.appendChild(list1);
    itemInput.value = ""; // clears the input after adding
 });