// const inputblock=document.querySelector(".input");
const inputbutton=document.querySelector(".inputBox i");
const generatebtn =document.querySelector(".btn button");
const inputTextValue = document.querySelector(".inputBox input");
console.log(inputTextValue);
console.log(inputbutton);


const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="@";
const allChar =uppercase+lowercase+number+symbol;
const lengt =12;

function createPassword(){
    let Password="";
    Password+= symbol[Math.floor(Math.random()*symbol.length)]
    Password+= uppercase [Math.floor(Math.random()*uppercase.length)];
    Password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    Password+= number[Math.floor(Math.random()*number.length)];
    // console.log(Password);
    while(lengt >Password.length){
        Password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    inputTextValue.value=Password;
    // console.log(inputText.value)

}
// createPassword();

generatebtn.addEventListener("click",createPassword);
// console.log(inputText);
// console.log(generatebtn);


inputbutton.addEventListener("click",()=>{
    // console.log("deleceted");
    const copppy=inputTextValue.value;
    inputTextValue.select();
    document.execCommand("copy");
    console.log(copppy);
});