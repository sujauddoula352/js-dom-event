console.log('the is a separate JS file');
// option 2
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

//option 3 other
const makePinkButton = document.getElementById('make-pink');
 makePinkButton.onclick = function makepink(){
    document.body.style.backgroundColor = 'pink'
 }
 // option 4
 const makePurpleButton = document.getElementById('make-purple');
 makePurpleButton.addEventListener('click',makePurple)

 function makePurple(){
    document.body.style.backgroundColor ='purple'
 }
