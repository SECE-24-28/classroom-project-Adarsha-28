// const Counter=({val,handleInc,handleDec})=>{
//     return(
//         <div className="Counter">
//             <h1>{val}</h1>
//             <div className='buttons'>
//                 <button onClick={handleInc} className='inc'>Increment</button>
//                 <button onClick={handleDec} className='dec'>Decrement</button>
//             </div>
//       </div>
//     );
// }
// export default Counter;

import ButtonContainer from "./ButtonContainer";
const Counter=({val,handleIncrement,handledecrement})=>
{
    let v="";
    if(v<0)
    {
        v=<p>Negative value</p>;
    }
    else if(val>5)
    {
        v=<p>Positive value</p>;
    }
    return(
        <div className="counter">
            <h1>{val}</h1>
            <ButtonContainer handleIncrement={handleIncrement}
            handledecrement={handledecrement}></ButtonContainer>
        </div>
    );
};
export default Counter;