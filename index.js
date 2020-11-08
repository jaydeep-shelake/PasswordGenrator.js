
const result = document.getElementById('result');
const lengthInp=document.getElementById('length'); //input to take number of length
const uppercaseCheck=document.getElementById('uppercase');
const lowercaseCheck=document.getElementById('lowercase');
const numberCheck=document.getElementById('numbers');
const symbolCheck = document.getElementById('symbols');
const genrate = document.getElementById('generate');
const clipboardBtn=document.getElementById('clipboard');
const msg= document.getElementById('msg');


const UPPERCASE_CHAR_CODE= fromLowToHeigh(65,90);  // uppercase asci charcter value
const LOWERCASE_CHAR_CODE= fromLowToHeigh(97,122);  // uppercase asci charcter value
const NUMBER_CHAR_CODE= fromLowToHeigh(48,57);  // uppercase asci charcter value
const SYMBOL_CHAR_CODE = fromLowToHeigh(33,47)
.concat(fromLowToHeigh(58,47)).concat(fromLowToHeigh(91,96))  // special asci charcter value
.concat(fromLowToHeigh(123,126));

//copy password to clipboard
clipboardBtn.addEventListener('click',()=>{
const textArea = document.createElement('textarea');
const password =result.innerText
if(!password){
    return;
}
textArea.value=password;
document.body.appendChild(textArea);
textArea.select();
document.execCommand('copy');
textArea.remove();
showMsg('password copied to clipboard',password)
});


genrate.addEventListener('click',()=>{
 const lengthOfPassword= lengthInp.value;  // getting length of password
 const includeUpperCase = uppercaseCheck.checked;  // if it check is will return true
 const includeLowerCase = lowercaseCheck.checked;  // if it check is will return true
 const includeNumber =  numberCheck.checked;  // if it check is will return true
 const includeSymbol=symbolCheck.checked; // if it check is will return true
 
 if(lengthOfPassword<=20){
    const password=genratePassword(lengthOfPassword,includeUpperCase,includeLowerCase,includeNumber,includeSymbol);
    result.innerText=password;
 }
 else{
     showMsg('Passwords length is ristriced to only 20','');
 }
 

 
});

function genratePassword(length,upperCase,lowerCase,num,symbol){
 let charCodes= LOWERCASE_CHAR_CODE;
 if(upperCase){charCodes=charCodes.concat(UPPERCASE_CHAR_CODE);}
 if(num){charCodes=charCodes.concat(NUMBER_CHAR_CODE);}
 if(symbol){charCodes=charCodes.concat(SYMBOL_CHAR_CODE);}

 const passwordCharcters=[];
 for(let i=0; i<length;i++){
     const char = charCodes[Math.floor(Math.random()*charCodes.length)]
   passwordCharcters.push(String.fromCharCode(char));
 }

 return passwordCharcters.join('');
}

function fromLowToHeigh(low,hiegh){
    const array=[];
    for(let i=low;i<=hiegh;i++){
         array.push(i);
    }

    return array
}

function showMsg(text,value){
    msg.innerText=text;
     msg.style.top='3%';
     result.innerText=value;
     setTimeout(()=>{msg.style.top='-60px';},2000)
}