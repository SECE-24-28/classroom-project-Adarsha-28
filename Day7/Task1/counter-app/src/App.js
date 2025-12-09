 
import './App.css';
//import GrandFather from './GrandFather';

//import { useState } from 'react';
 
// import { Comp1, Comp2 } from './Component';
// import Component1 from "./Component1";
// import Component2 from "./Component2";
// import Component3 from './Component3';
// import Component4 from './Component4';
// import Component5 from './Component5';
// import Component6 from './Component6';
// import Component7 from './Component7';

// function App() {
//   let age = 21;
//   let msg = "Hello world";
//   return (
//     <div className="App">
//       <h1>Leaning react</h1>
//       <Component1 age={age}></Component1>
//       <Component2 msg={msg}></Component2>
//       <Component3></Component3>
//       <Component4></Component4>
//       <Comp1></Comp1>
//       <Comp2></Comp2>
//     </div>
//   );
// }

// export default App;


// function App() {
//   let msg="Hello world";
//   return (
//     <div className="App">
//       <h1>Leaning react</h1>
//       <GrandFather msg={msg}></GrandFather>
//     </div>
//   );
// }
// export default App;

// function App() { //displays only in console
//   let val=0;
//   const handleIncrement = () => {
//     val =val +1;
//     console.log("Increment button clicked",val);
//   };
//   const handleDecrement = () => {
//     val =val -1;
//     console.log("Decrement button clicked",val);
//   };
//   return (
//     <div className="App">
//       <h1>Learning react</h1>
//       <div className="counter">
//         <h1>{val}</h1>
//         <div className="buttons">
//           <button onClick={handleIncrement} className="inc">Increment</button>
//           <button onClick={handleDecrement} className="dec">Decrement</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

// function App() { //displays in ui=> also by usestatehook
//   //let val=0;
//   //1.variable 2.func to update the value of 1 variable
//   let [val,setVal] = useState(10);
//   const handleIncrement = () => {
//     //val =val +1;
//     setVal(val+1);
//     console.log("Increment button clicked",val);
//   };
//   const handleDecrement = () => {
//     //val =val -1;
//     setVal(val-1);
//     console.log("Decrement button clicked",val);
//   };
//   return (
//     <div className="App">
//       <h1>Learning react</h1>
//       <div className="counter">
//         <h1>{val}</h1>
//         <div className="buttons">
//           <button onClick={handleIncrement} className="inc">Increment</button>
//           <button onClick={handleDecrement} className="dec">Decrement</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;


import {useState} from "react";
import Counter form "./Counter";
function App() {
  // let val = 0;
  //1.variable,2.function to update the value of first variable 
  let [val,setVal]=useState(10);
  // let val=10;
  //function setVal(newVal)
  // {
  //   val=newval;
  // }
  const handleIncrement = () => {
    // val=val+1;
    setVal(val+1);
    console.log("Increment Button clicked", val);
  };
  const handledecrement = () => {
    // val = val - 1;
    setVal(val-1);
    console.log("Decrement Button clicked", val);
  };
  return (
    <div className="App">
      <h1>Learning React</h1>
      <div className="counter">
        <h1>{val}</h1>
        <div className="button">
          <button onClick={handleIncrement} className="inc">
            Increment
          </button>
          <button onClick={handledecrement} className="dec">
            Decrement
          </button>

        </div>

        <div className="button">
          <button onClick={handleIncrement} className="inc">
            Increment
          </button>
          <button onClick={handledecrement} className="dec">
            Decrement
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;

  // let mywill="Hello World!";

  // return (
  //   <div className="App">
  //    <h1>Learning React Components</h1>
  //    <Component1></Component1>
  //    <Component2></Component2>
  //    <Comp1 src="Hello Gobika"></Comp1>
  //    <Comp2/>
  //    <Comp3/>
  //    <Comp4/>
  //   </div>
  // );