let originalNumber = 25.12345
document.getElementById("Number").innerHTML = originalNumber
//toast
function toastifyError() {
    Toastify({
        text: "Please Type Your Number",
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b999, #129c6b)",
        }
    }).showToast();
    return;
}
//Round The Number
function roundNumber() {
    let num = document.getElementById("input-Text").value
    if (!num) {
        toastifyError()
        return
    }
    let roundNumber = Math.round(num)
    let html = `<span style= "color: red; font-size: 30px;">` + roundNumber + `</span>`
    document.getElementById("output").innerHTML = html
}
//Ceil The Number
function ceilNumber() {
    let num = document.getElementById("input-Text").value
    if (!num) {
        toastifyError()
        return
    }
    let ceilNumber = Math.ceil(num)
    let html = `<span style= "color: red; font-size: 30px;">` + ceilNumber + `</span>`
    document.getElementById("output").innerHTML = html
}
//floor The Number
function floorNumber() {
    let num = document.getElementById("input-Text").value
    if (!num) {
        toastifyError()
        return
    }
    let floorNumber = Math.floor(num)
    let html = `<span style= "color: red; font-size: 30px;">` + floorNumber + `</span>`
    document.getElementById("output").innerHTML = html
}
//Generate Random Number
function randomNumber() {
    let randomNumber = Math.random()
    let html = `<span style= "color: red; font-size: 30px;">` + randomNumber + `</span>`
    document.getElementById("output").innerHTML = html
}
//Throw A Dice
function throwDice() {
    let num = Math.random()
    console.log(num)
    let diceNum = (num * 6) + 1
    let throwDice = Math.floor(diceNum)
    let html = `<span style= "color: red; font-size: 50px;">` + throwDice + `</span>`
    document.getElementById("output").innerHTML = html
}
//Generate A Strong Password
function StrongPassword() {
    randomString = ""
    let length = +prompt("Please Type Your Limit Number")
    if (!length) {
        toastifyError()
        return;
    }
    let limit = length
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',"
    for (i = 0; i < limit; i++) {
        let randomNumber = Math.random()
        randomString += string.charAt(Math.floor(randomNumber * string.length))
    }
    let html = "<h6 style= 'color: green; font-size: 15px'>" + randomString + "</h6>"
    document.getElementById("output").innerHTML = html
}
//Convertion String
function convertString() {
    let num = document.getElementById("input-Text").value
    if (!num) {
        toastifyError()
        return;
    }
    //   num = parseInt(num) 251 is Number
    //   num = parseFloat(num) 251.76444 is Number
    // num = Number(num) 251.76444 is Number
    num = Number(num)
    num = num.toFixed(2)
    num = Number(num)
    console.log(typeof (num))
    let html = "<span style= 'color: green; font-size: 40px'>" + num + "</span> <br> <h2 style= 'color:red;'>This is converting string to Number Function</h2>"
    document.getElementById("output").innerHTML = html
}
//Controlling Length
function controlLength() {
    let num = document.getElementById("input-Text").value
    if (!num) {
        toastifyError()
        return;
    }
    //   num = parseInt(num) 251 is Number
    //   num = parseFloat(num) 251.76444 is Number
    // num = Number(num) 251.76444 is Number
    num = Number(num)
    num = num.toFixed(2)
    num = Number(num)
    console.log(typeof (num))
    let html = "<span style= 'color: green; font-size: 40px'>" + num + "</span> <br> <h2 style= 'color:red;'>This is a Controlling Length Funtion</h2>"
    document.getElementById("output").innerHTML = html
}
//Calculate GST
function calculateGST() {
    let bill = document.getElementById("input-Text").value
    if (!bill) {
        toastifyError("Please Type SomeThing To Calculate")
        return;
    }
    bill = Number(bill)
    let tax = +prompt("Please Type Your Current Tax Ratio")
    let tax2 = bill * (tax / 100)
    let totalBill = tax2 + bill
    totalBill = Math.round(totalBill)
    document.getElementById("output").innerHTML = 'Bill = <span style= "color: black; font-size:20px; font-weight:bold;">' + bill + '</span>'
    document.getElementById("output").innerHTML += '<br> Tax = <span style= "color: red; font-size:20px; font-weight:bold;">' + tax2 + '</span>'
    document.getElementById("output").innerHTML += '<br> Total Bill = <span style= "color: green; font-size:20px; font-weight:bold;">' + totalBill + '</span>'
}
//clear
document.getElementById("clear2").onclick = function(){
    document.getElementById("output").innerHTML = ""
}
document.getElementById("clear").onclick = function(){
    document.getElementById("input-Text").value = ""
}