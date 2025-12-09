// import Button from "./Button";

// const ButtonContainer = ((handleDecrement,handleIncrement))=> {
//     return (
//         <div className="buttons">
//             <Button text={"Increment"} func={handleIncrement} as={"inc"}></Button>
//             <Button text={"Decrement"} func={handleDecrement} as={"dec"}></Button>
//         </div>
//     );
// };

// export default ButtonContainer;

import Button from "./Button";

const ButtonContainer=({handleIncrement,handledecrement})=>
{
    return(
        <div className="button">
            <Button text={"Increment"} func={handleIncrement} as={"inc"}></Button>
            <Button text={"Decrement"} func={handledecrement} as={"dec"}></Button>
        </div>
    );
};
export default ButtonContainer;