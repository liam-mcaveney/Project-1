const slotsOnWheel = 1;

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

    const num1 = randomNum();
    const num2 = randomNum();
    const num3 = randomNum();
    const num4 = randomNum();
    const num5 = randomNum();

    wheel1.innerHTML = num1;
    wheel2.innerHTML = num2;
    wheel3.innerHTML = num3;
    wheel4.innerHTML = num4;
    wheel5.innerHTML = num5;

    if(num1 == num2 && num1 == num3 && num1 == num4 && num1 == num5){
        const win ="You Win";
        console.log(win);
        const bot = getElement('divBot');
        bot.innerHTML = `${win}`;
    }else{
        const lose ="You Lose";
        console.log(lose);
        const bot = getElement('divBot');
        bot.innerHTML = `${lose}`;
    }
    
}
