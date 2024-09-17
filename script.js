const display=document.querySelector("#display");
// let btn=document.querySelectorAll("button");
// btn.addEventListener("click",()) =>{
//     calc(btn.innerHTML);
// }
// console.log(typeof(display));
function appendtoDisplay(input){
    display.value +=input;
}
function removefromDisplay(){
    display.value=display.value.toString().slice(0,-1);
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}