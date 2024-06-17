let modeButton = document.querySelector("#mode");
let currMode = "white";

modeButton.addEventListener("mouseover",() => {
    if(currMode == "white"){
        currMode = "black";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else if(currMode == "black"){
        currMode = "red";
        document.querySelector("body").style.backgroundColor = "red";
    }
    else if(currMode == "red"){
        currMode = "green";
        document.querySelector("body").style.backgroundColor = "green";
    }
    else if(currMode == "green"){
        currMode = "blue";
        document.querySelector("body").style.backgroundColor = "blue";
    }
    else if(currMode == "blue"){
        currMode = "yellow";
        document.querySelector("body").style.backgroundColor = "yellow";
    }
    else{
        currMode = "white";
        document.querySelector("body").style.backgroundColor = "white";
    }
});
