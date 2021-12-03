function check(){
 var income = document.getElementById("income").value
 var borrow = document.getElementById("borrow").value
 var interest = document.getElementById("interest").value
 var time = document.getElementById("time").value

 income = Number(income)
 borrow = Number(borrow)
 interest = Number(interest)
 time = Number(time)

    if((income < 0 || borrow < 0 || interest < 0 || time < 0) || (isNaN(income) || isNaN(borrow) || isNaN(interest))){
        alert("Please check your information again!")
        return;
    }

 var monthly = income * 0.6
 var money = (borrow * (1 + interest)) / time
 var alertTag = document.getElementById("result")

 alertTag.innerHTML = ""

 var monthlyP = document.createElement("p")
 monthlyP.textContent = "Số tiền có thể trả trong 1 tháng: " + monthly
 var moneyP = document.createElement("p")
 moneyP.textContent = "Số tiền phải trả trong 1 tháng: " + money

 alertTag.appendChild(monthlyP)
 alertTag.appendChild(moneyP)

 document.getElementById("result").style.display = "block"

    if(monthly > money){
        var informTag = document.getElementById("inform")

        informTag.innerHTML = ""

        var informP = document.createElement("p")
        informP.textContent = "Bạn đã đủ điều kiện vay tiền"
        informTag.appendChild(informP)

        document.getElementById("inform").style.display = "block"
        document.getElementById("inform").style.backgroundColor = ""
    }else {
        var informTag = document.getElementById("inform")

        informTag.innerHTML = ""

        var informP = document.createElement("p")
        informP.textContent = "Bạn không đủ điều kiện vay tiền!"
        informTag.appendChild(informP)

        document.getElementById("inform").style.display = "block"
        document.getElementById("inform").style.backgroundColor = "rgb(242, 91, 80)"
    }



}

function reset(){
    document.getElementById("income").value = ""
    document.getElementById("borrow").value = ""
    document.getElementById("interest").value = ""
    document.getElementById("time").value = ""
    document.getElementById("result").style.display = "none";
    document.getElementById("inform").style.display = "none";
}