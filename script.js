
function tipCalculator(){
    let total = document.getElementById("bill-amount").value;
    let people = document.getElementById("people-amount").value;
    let custom = document.getElementById("button-custom").value;

    console.log(total);
    console.log(people);

    if ( total == "" || total == "0" ){    
        // call total error function 
        document.getElementById("bill-amount").style.border = "2px solid red";
        //document.getElementById("bill-amount").style.borderColor = "red";
    }

    if ( people == "" || people == "0" ){    
        // call people error function 
        document.getElementById("people-amount").style.border = "2px solid red";
    }

    let tipCalc = document.getElementById("tip-calc").innerHTML;
    let totalCalc = document.getElementById("total-calc").innerHTML;

    let percentage = 0;

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

    let number1 = 0;
    let number2 = 0;

    number1 = ((total * percentage) / people).toFixed(2);
    number2 = (((total*percentage)/people) + (total/people)).toFixed(2);

    document.getElementById("tip-calc").innerHTML = "$" + number1;
    document.getElementById("total-calc").innerHTML = "$"+number2;
    
}
