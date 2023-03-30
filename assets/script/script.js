function kilotomiles(x, y){


return parseFloat(x) * parseFloat(y);

}

function kilotofoot(x, y){


    return parseFloat(x) * parseFloat(y);

}

function kilotoinch(x, y){


     return parseFloat(x) * parseFloat(y);
    
    
}
    
function kilotometer(x, y){
    
    return parseFloat(x) * parseFloat(y);

}
           


function display() {

    let x = document.getElementById("inputKilometer").value;

                let miles = 0.621371;
                let ft = 3280;
                let inch = 10.07880;
                let meter = 1000;

                document.getElementById("milesDisplay").innerHTML = 
                "The Miles is = " + kilotomiles(x, miles);


                document.getElementById("footDisplay").innerHTML = 
                "The Feet is = " + kilotofoot(x, ft);
                
                document.getElementById("inchDisplay").innerHTML = 
                "The Inches is = " + kilotoinch(x, inch);

                document.getElementById("meterDisplay").innerHTML = 
                "The Meter is = " + kilotometer(x, meter);

            }

