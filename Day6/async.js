// setTimeout(() => {
//   console.log("SetTimeout Function");
// }, 0);
// //callback fun and timer
// console.log("Hello World");

// //Callback Hell
// //Nested callbacks
// setTimeout(() => {
//   console.log("SetTimeout Function 1");
//   setTimeout(() => {
//     console.log("SetTimeout Function 2");
//     setTimeout(() => {
//       console.log("SetTimeout Function 3");
//       setTimeout(() => {
//         console.log("SetTimeout Function 4");
//         setTimeout(() => {
//           console.log("SetTimeout Function 5");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);


// //Promises
// //3 state
// //1.pending
// //2.fulfilled(res)
// //3.rejected(rej)

// //Promise pass a callback with 2 parameters
// let muPromise = new Promise((res,rej)=>{
//     let marks = 40;
//     if(marks>60){
//         res("Student is passed");

//     }else{
//         rej("Student is failed");
//     }
// });

// //ways to call a promise
// //.then() adn .catch()
// myPromise
//     .then((a)=>{
//         console.log(a);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// //Async and await 
// //no error handling
// let handlePromise = async() => {
//     try{
//         console.log("asdf");
//         let response = await myPromise;
//         console.log(response);
//         console.log("Anything");
//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("execute");
//     }
// }
// handlePromise();

//Fetch API ==> 2 ways,then catch and async await

// let fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => {
//             console.log(res);
//             return res.json();
//         })
//         .then((data) => {
//             console.log("value is ", data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

let fetchData = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data = await response.json();
        //store in local storage using arrays
        localStorage.setItem("responseData",JSON.stringify(data));
        //stringify => converts string to obj, without this nothing cant be done 
        console.log("value is ",data); 
    }catch(err){
        console.log(err);
    }
};
//parse => convert string to obj again 
// to save memory and load server again and again we use these, just to optimize the app
let localData = JSON.parse(localStorage.getItem("responseData")) || [];
console.log(localData);
if(localData.length <= 0){
    fetchData();
}
