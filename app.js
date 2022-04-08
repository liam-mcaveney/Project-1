const slotsOnWheel = 10;
const ranNum = randomNum();


function randomNum(){
    return Math.floor(Math.random()*(slotsOnWheel));
}
function getElement(id){
    return document.getElementById(id);
}

function spin(){
    const wheel1 = getElement('wheel1');
    const wheel2 = getElement('wheel2');
    const wheel3 = getElement('wheel3');
    const wheel4 = getElement('wheel4');
    const wheel5 = getElement('wheel5');

    const num1 = ranNum;
    const num2 = ranNum;
    const num3 = ranNum;
    const num4 = ranNum;
    const num5 = ranNum;

    wheel1.innerHTML ='${num1}';
    wheel2.innerHTML ='${num2}';
    wheel3.innerHTML ='${num3}';
    wheel4.innerHTML ='${num4}';
    wheel5.innerHTML ='${num5}';

    if(num1 == num2 && num1 == num3 && num1 == num4 && num1 == num5){
        console.log("You Win");
    }else{
        console.log("You Lose");
    }
}
