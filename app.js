const letters = '!"#$%&()*+-/0123456789<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz'.split('');
const outputField = document.querySelector('.password-output-field');
const button = document.querySelector('.generate-btn');
const passwordLenght=8;

button.onclick = function(){

    outputField.value = [...Array(passwordLenght).keys()].map(_ => letters[Math.floor(Math.random() * letters.length)]).join('')

    // const password=[];

    // for(let i = 0;i<passwordLenght;i++){
    //     password.push(letters[Math.floor(Math.random() * letters.length)]);
    // }
    // outputField.value = password.join('');

    //const password = letters.map(item => letters[Math.floor(Math.random() * letters.length)]).join('');
    
}