//1 we need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

//2. Generate ranom num btw 1 and 20
let randomNumber = Math.trunc(Math.random()*20)+1;

//2.1 create  variable of score
let scr = 20;

//Button functionalities
//2 args in eventlistener => 1. event that we want to occur 2. callback
//3. check button func
checkBtn.addEventListener("click",()=>{
    console.log(randomNumber);
    let inputVal = Number(guess.value);
    
    if(!inputVal){
        alert("Please enter a number");
        msg.textContent = "No Number";
    }

    // when we get input value it will be string
    //3.1 Input value is equal to random number
    else if(inputVal === randomNumber){
        //3.1.1 Change the bg to green
        document.body.style.backgroundColor = "green";
        //3.1.2 Instead of ? put the random value
        number.textContent = randomNumber;
        //3.1.3 At highscore we have to put value of score
        if(scr > Number(highScore.textContent)){
            highScore.textContent = scr;
        }
        //3.1.4 Show msg crt value
        msg.textContent = "Correct Value";
        //console.log("Value is correct")
    } else if(inputVal > randomNumber){
        //3.2 if input is greater than random number
        //3.2.1 decrease score by 1
        scr -=1;
        score.textContent = scr;
        //3.2.2 Show msg "Too HIgh"
        msg.textContent = "Too High";
    } else if(inputVal < randomNumber){
        console.log("Number is too low");
        //3.3 if input is less than random number
        //3.3.1 decrease score by 1
        scr -= 1;
        score.textContent = scr;
        //3.3.2 Show msg "Too Low"
        msg.textContent = "Too Low";
    }
});

let init = () => {
    //4.1 Reset all values to initial stage
    scr =20;
    score.textContent = scr;
    number.textContent = "?";
    guess.value="";
    msg.textContent = "Start guessing...";
    randomNumber = Math.trunc(Math.random()*20)+1;
    document.body.style.backgroundColor = "black";
}
//4. Again button func
againBtn.addEventListener("click",init); //callback should be passed as reference init, not func call init()
