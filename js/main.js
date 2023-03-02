document.querySelectorAll(".numberbutton").forEach(el => el.addEventListener("click", numberbuttonclick));

// function testbuttonclick(el){
//     console.log(el.target);
//     console.log('clicked');
// }

const operators = ['/', '*', '-', '+'];


function numberbuttonclick(el){
    // if(!document.querySelector("#display2").innerText.split("").contains('+')){
        document.querySelector("#display").innerText = document.querySelector("#display").innerText + el.target.innerText;
        console.log(el.target);
        console.log('clicked');
    // }
}

document.querySelector("#clear").addEventListener("click", clearbuttonclick);

function clearbuttonclick(el){
    document.querySelector("#display2").innerText = ""
    document.querySelector("#display").innerText = ""
    console.log(el.target);
    console.log('clicked');
}

//plus operator
document.querySelector("#plusbutton").addEventListener("click", plusbuttonclick);

function plusbuttonclick(el){

    //if display2 last element is already '+' and display1 is blank
    if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "+" && document.querySelector("#display").innerText == ""){
        console.log("cannot add another +")
    }

    //if display2 last element is NOT blank and display1 is NOT blank
    else if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText != ""){
        operate(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1])
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + "+"
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is an operator that isn't "+"
    else if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "/" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "-" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "*"){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText.slice(0, -1) + el.target.innerText
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is a number and display1 is blank
    else if(typeof(Number(document.querySelector("#display2").innerText)) == "number" && document.querySelector("#display").innerText == ""){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + el.target.innerText
    }

    else{
        document.querySelector("#display2").innerText = document.querySelector("#display").innerText + el.target.innerText
        // console.log(el.target);
        // console.log('clicked');
        document.querySelector("#display").innerText = ""
    }
}

//minus operator
document.querySelector("#minusbutton").addEventListener("click", minusbuttonclick);

function minusbuttonclick(el){

    //if display2 last element is '-' and display1 is blank
    if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "-" && document.querySelector("#display").innerText == ""){
        console.log("cannot add another -")
    }

    //if display2 last element is NOT blank and display1 is NOT blank
    else if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText != ""){
        operate(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1])
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + "-"
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is an operator that isn't "-"
    else if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "/" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "+" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "*"){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText.slice(0, -1) + el.target.innerText
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is a number and display1 is blank
    else if(typeof(Number(document.querySelector("#display2").innerText)) == "number" && document.querySelector("#display").innerText == ""){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + el.target.innerText
    }

    else{
        document.querySelector("#display2").innerText = document.querySelector("#display").innerText + el.target.innerText
        // console.log(el.target);
        // console.log('clicked');
        document.querySelector("#display").innerText = ""
    }
}
    
//times operator
document.querySelector("#timesbutton").addEventListener("click", timesbuttonclick);

function timesbuttonclick(el){

    //if display2 last element is '*' and display1 is blank
    if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "*" && document.querySelector("#display").innerText == ""){
        console.log("cannot add another *")
    }

    //if display2 last element is NOT blank and display1 is NOT blank
    else if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText != ""){
        operate(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1])
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + "*"
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is an operator that isn't "*"
    else if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "/" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "+" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "-"){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText.slice(0, -1) + el.target.innerText
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is a number and display1 is blank
    else if(typeof(Number(document.querySelector("#display2").innerText)) == "number" && document.querySelector("#display").innerText == ""){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + el.target.innerText
    }

    else{
        document.querySelector("#display2").innerText = document.querySelector("#display").innerText + el.target.innerText
        // console.log(el.target);
        // console.log('clicked');
        document.querySelector("#display").innerText = ""
    }
}

//divide operator
document.querySelector("#dividebutton").addEventListener("click", dividebuttonclick);

function dividebuttonclick(el){

    //if display2 last element is '/' and display1 is blank
    if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "/" && document.querySelector("#display").innerText == ""){
        console.log("cannot add another /")
    }

    //if display2 last element is NOT blank and display1 is NOT blank
    else if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText != ""){
        operate(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1])
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + "/"
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is an operator that isn't "*"
    else if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "*" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "+" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "-"){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText.slice(0, -1) + el.target.innerText
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is a number and display1 is blank
    else if(typeof(Number(document.querySelector("#display2").innerText)) == "number" && document.querySelector("#display").innerText == ""){
        document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + el.target.innerText
    }

    else{
        document.querySelector("#display2").innerText = document.querySelector("#display").innerText + el.target.innerText
        // console.log(el.target);
        // console.log('clicked');
        document.querySelector("#display").innerText = ""
    }
}

//operate function
function operate(x){
    if(x == "-"){
        console.log(`subtracted! result is ${Number(document.querySelector("#display2").innerText.slice(0, -1)) - Number(document.querySelector("#display").innerText)}`)

        document.querySelector("#display2").innerText = Number(document.querySelector("#display2").innerText.slice(0, -1)) - Number(document.querySelector("#display").innerText)   
    }

    else if(x == "+"){
        console.log(`added! result is ${Number(document.querySelector("#display2").innerText.slice(0, -1)) + Number(document.querySelector("#display").innerText)}`)

        document.querySelector("#display2").innerText = Number(document.querySelector("#display2").innerText.slice(0, -1)) + Number(document.querySelector("#display").innerText)
    }

    else if(x == "*"){
        console.log(`multiplied! result is ${Number(document.querySelector("#display2").innerText.slice(0, -1)) * Number(document.querySelector("#display").innerText)}`)

        document.querySelector("#display2").innerText = Number(document.querySelector("#display2").innerText.slice(0, -1)) * Number(document.querySelector("#display").innerText)
    }

    else if(x == "/"){
        console.log(`divided! result is ${Number(document.querySelector("#display2").innerText.slice(0, -1)) / Number(document.querySelector("#display").innerText)}`)

        document.querySelector("#display2").innerText = Number(document.querySelector("#display2").innerText.slice(0, -1)) / Number(document.querySelector("#display").innerText)
    }

    //if display two has a number, and display one is empty, do nothing
    else if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText == ""){
        console.log("do nothing!") ;
    }

    else{
        document.querySelector("#display2").innerText = document.querySelector("#display").innerText;
        document.querySelector("#display").innerText = "";
        console.log("swapped!");
    }
    
}

//enter button
document.querySelector("#enterbutton").addEventListener("click", enterbuttonclick);

function enterbuttonclick(el){

    //if display2 last element is NOT blank and display1 is NOT blank
    if(document.querySelector("#display2").innerText != "" && document.querySelector("#display").innerText != ""){
        operate(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1])
        // document.querySelector("#display2").innerText = document.querySelector("#display2").innerText + "/"
        document.querySelector("#display").innerText = ""
    }

    //if display2 last element is an operator, do nothing
    else if(document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "*" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "+" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "-" || document.querySelector("#display2").innerText.split("")[document.querySelector("#display2").innerText.split("").length-1] == "/"){
        console.log('do nothing yet')
    }

    //if display 2 is blank and display one has a number, clear display 2 and put in display's one number
    // else if(document.querySelector("#display2").innerText == "" && document.querySelector("#display").innerText != "") {
    //     document.querySelector("#display2").innerText = document.querySelector("#display").innerText
    //     document.querySelector("#display").innerText = document.querySelector("#display").innerText
    //     console.log("swapped!")
    // }

    else{
        operate()
    }

}

