const slotsOnWheel = 4;
const wheelRadius = 250;
const images = ["images/slotmachine6.webp","images/slotmachine2.webp","images/slotmachine7.webp","images/slotmachine8.webp","images/slotmachine5.jpeg"];

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

    const image1 = images[num1];
    const image2 = images[num2];
    const image3 = images[num3];
    const image4 = images[num4];
    const image5 = images[num5];

    console.log(image1);
    wheel1.innerHTML = '<img src =' + image1 + '>';
    wheel2.innerHTML = '<img src =' + image2 + '>';
    wheel3.innerHTML = '<img src =' + image3 + '>';
    wheel4.innerHTML = '<img src =' + image4 + '>';
    wheel5.innerHTML = '<img src =' + image5 + '>';

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

/*function wheelSetup(wheels){
    var numberRan = randomNum();
    var wheelAngle = 360 / slotsOnWheel;
    for (var i = 0; i < slotsOnWheel; i++){
        var wheel = document.createElement('div');
        wheel.className = 'wheel';
        var transform = 'rotateX('+ (wheelAngle * i) + 'deg) translateZ(' + wheelRadius + 'px)';
        wheel.style.transform = transform;
        var wheelNumbers = $(wheel).append('<p>' + ((numberRan + i)% slotsOnWheel)+ '</p>');
        wheels.append(wheel);
    }
}*/