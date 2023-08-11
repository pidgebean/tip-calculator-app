
function tipCalculator(){
    let total = document.getElementById("bill-amount").value;
    let people = document.getElementById("people-amount").value;
    let custom = document.getElementById("button-custom").value;
    let percentage = 0;

    console.log(total);
    console.log(people);

    if ( total == "" || total == "0" ){    
        document.getElementById("bill-amount").style.border = "2px solid red";
        document.getElementById("error-message-1").style.display = "block";
    }

    if ( people == "" || people == "0" ){    
        document.getElementById("people-amount").style.border = "2px solid red";
        document.getElementById("error-message-2").style.display = "block";
    }

    

    let tipCalc = document.getElementById("tip-calc").innerHTML;
    let totalCalc = document.getElementById("total-calc").innerHTML;

    

    if (document.getElementById("5%").checked){
        percentage = 0.05;
    }
    if (document.getElementById("10%").checked){
        percentage = 0.10;
    }
    if (document.getElementById("15%").checked){
        percentage = 0.15;
    }
    if (document.getElementById("25%").checked){
        percentage = 0.25;
    }
    if (document.getElementById("50%").checked){
        percentage = 0.50;
    }

    if (custom > 0){
        percentage = custom / 100;
    }

    if (percentage == 0){
        // error here
        document.getElementById("error-message-3").style.display = "block";
    } else{
        document.getElementById("error-message-3").style.display = "none";
    }

    if ( total == "" || total == "0" || people == "" || people == "0"){
        return
    } else{
        document.getElementById("bill-amount").style.border = "none";
        document.getElementById("error-message-1").style.display = "none";
        document.getElementById("people-amount").style.border = "none";
        document.getElementById("error-message-2").style.display = "none";
    }

    let number1 = 0;
    let number2 = 0;

    number1 = ((total * percentage) / people).toFixed(2);
    number2 = (((total*percentage)/people) + (total/people)).toFixed(2);

    document.getElementById("tip-calc").innerHTML = "$" + number1;
    document.getElementById("total-calc").innerHTML = "$"+number2;
    
}


