let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.querySelectorAll("input")[0];
    let feedback = document.querySelectorAll("input")[1];
    // console.log(name,feedback);
    if(name.value === ""){
        alert("Name field is required");
        return; //must, then only other part will work
    }
    if(feedback.value.length < 5){
        alert("Feedback must be atleast 5 characters long");
        return;
    }
    let result = document.querySelector("#result");
    //result.textContent = `Thankyou ${name.value} for your feedback`;
    result.innerHTML= `<div><h3 class="aa">Thank you ${name.value}, for your feedback</h3>`
    <p class="bb">Your feedback is ${feedback.value}</p></div>
    form.reset();
});