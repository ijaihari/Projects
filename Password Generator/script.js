const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+=?/|><~`";
let password = '';
const length = 12;
let allChars = upperCase + lowerCase + number + symbol;


function check() {
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; console.log(password);
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; console.log(password);
    password += number[Math.floor(Math.random() * number.length)]; console.log(password);
    password += symbol[Math.floor(Math.random() * symbol.length)]; console.log(password);

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    console.log(password);
}
 function copy()
 {
    .select();
    .execCommand("copy")
 }