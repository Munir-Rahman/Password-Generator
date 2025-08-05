const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
let lenght = document.querySelector("#size");
let numbercheck = document.querySelector("#numbers")
let uppercasecheck = document.querySelector("#uppercase");
let lowercasecheck = document.querySelector("#lowercase");
let symbolcheck = document.querySelector("#Symbols");
let result = document.querySelector("#password");
//Password Options will store here
let charactors = "";
//Clear Btn
let clearbtn = document.getElementById("clearbtn");

let passwordfun = () => {  
    if(numbercheck.checked){
        charactors += numbers;
    }
    if(uppercasecheck.checked){
        charactors += uppercase;
    }
    if(lowercasecheck.checked){
        charactors += lowercase;
    }
    if(symbolcheck.checked){
        charactors += symbols;
    }
    let size = charactors.length;
    let password = '';
    for(let i=0;i<lenght.value;i++){
        let index = Math.floor(Math.random() * size);
        password += charactors.charAt(index);
    }
    charactors = "";
    result.innerText = password;
}

clearbtn.addEventListener('click', () => {
    result.innerHTML = "";
});

let copy = () => {
    const text = document.querySelector("#password").innerText;
    navigator.clipboard.writeText(text).then(() => alert("copied Successfully")).catch(err => alert("filed to Copy"));
}
