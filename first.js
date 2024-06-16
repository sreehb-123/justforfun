let gameNum = 69;
let userNum = prompt("Guess the number: ");

while(userNum!=gameNum){
    if(userNum<gameNum){
        userNum = prompt("Oops! You are behind the correct number...Guess again");
    }
    else{
        userNum = prompt("Oops! You are ahead of the correct number...Guess again");
    }
}

alert("CONGRATULATIONS!!");