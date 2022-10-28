const inputName = prompt("What is your name?");
const inputAge = parseInt(prompt(`Hi ${inputName}, what is your age?`));
const inputMoney = parseInt(prompt(`How much do you have ${inputName}`));

if (inputAge >= 15){
    if( inputMoney <=10){
        console.log("I will recommend you to visit chose pizza Hut");
        
    }

    else if (inputMoney >= 100 || inputMoney <= 250){
        console.log("I will recommend you to chose Xhi chinese restuarant");
    }
    
    else if (inputMoney >= 300 || inputMoney <= 600){
        console.log("I will recommend you to chose Tiana's deluxe Lounge");
    }
    else{
        console.log("We do not have any recommendation at the moment.");
    }
}

else{
    console.log(`Hello ${inputName}We currently do not have kids and teens restuarant`);
}
