var bill = document.querySelector("#bill");
var total = document.querySelector("#total");
var submit = document.querySelector("#submit");
var one = document.querySelector("#one");
var submit1 = document.querySelector("#submit1");
var hidden1 = document.querySelector("#hidden1")
var hidden2 = document.querySelector("#hidden2");
var error = document.querySelector(".hidden")
submit1.addEventListener("click", () => {
    var billval = bill.value;
    if (billval == "" || billval == null) {
        error.style.display = "block";
        error.innerHTML = "Please enter the Bill Amount "
    } else {
        error.style.display = "none";

        hidden1.style.display = "block";
        submit1.style.display = "none";
    }


})
submit.addEventListener("click", () => {

    var billInput =Number(bill.value);
    var totalInput = Number(total.value);

    if (billInput == "" || billInput == null || totalInput == "" || totalInput == null) {

        error.style.display = "block";
        error.innerHTML = "Please enter the Total amount "
    }
    else if(billInput>totalInput){
        error.style.display = "block";
        error.innerHTML = " Bill is greater than amount given"
        document.querySelector("#hidden2").style.display = "none";
    }
    else if(billInput == totalInput){
        error.style.display = "block";
        error.style.color = "darkgreen";
        error.style.backgroundColor = "LightGreen";
        error.style.border = "LightGreen";
        error.innerHTML = "Bill and amount given same!! don't return anything"
        document.querySelector("#hidden2").style.display = "none";
    }
    else {


      
            error.style.display = "none";

            var diff = totalInput - billInput;

            var one = 0,
                five = 0,
                ten = 0,
                twenty = 0,
                hundred = 0,
                fivehundred = 0,
                twothousand = 0;

            while (diff > 0) {
                if (bill.value == null || total.value == null) {
                    alert("enter values")
                } else {
                    if (diff < 5) {
                        one = div(diff, 1);
                        diff = rem(diff, 1);


                    } else if (diff >= 5 && diff < 10) {
                        five = div(diff, 5);
                        diff = rem(diff, 5);


                    } else if (diff >= 10 && diff < 20) {
                        ten = div(diff, 10);
                        diff = rem(diff, 10);


                    } else if (diff >= 20 && diff < 100) {
                        twenty = div(diff, 20);
                        diff = rem(diff, 20);


                    } else if (diff >= 100 && diff < 500) {
                        hundred = div(diff, 100);
                        diff = rem(diff, 100);


                    } else if (diff >= 500 && diff < 2000) {
                        fivehundred = div(diff, 500);
                        diff = rem(diff, 500);


                    } else {
                        twothousand = div(diff, 2000);
                        diff = rem(diff, 2000);

                    }
                }

            

            document.querySelector("#hidden2").style.display = "block";
            document.getElementById("one").innerHTML = Math.floor(one);
            document.getElementById("five").innerHTML = Math.floor(five);
            document.getElementById("ten").innerHTML = Math.floor(ten);
            document.getElementById("twenty").innerHTML = Math.floor(twenty);
            document.getElementById("hundred").innerHTML = Math.floor(hundred);
            document.getElementById("fivehundred").innerHTML = Math.floor(fivehundred);
            document.getElementById("twothousand").innerHTML = Math.floor(twothousand);




        }



    }

})


function div(diff, num) {
    return diff / num;
}

function rem(diff, num) {
    return diff % num;
}