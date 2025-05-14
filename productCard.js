
let count = 1
document.getElementById("count").innerHTML = count
const increase = () => {
    if (count < 5) {
        count++
        document.getElementById("count").innerHTML = count
    }
    else {
        console.log("limit exceed");
    }
}
const decrease = () => {
    if (count > 1) {
        count--
        document.getElementById("count").innerHTML = count
    }
    else {
        console.log("limit exceed");
    }

}
const buynow = () => {
    alert("Your order place now!!!")
    window.location.reload()
}
const addtocart = () => {
    alert("Your order added successfully😊")
    window.location.reload()
}

let darkmode = () => {
    document.getElementById("body").style.backgroundColor = "gray"
    document.getElementById("topbar").style.backgroundColor = "black"
    document.getElementById("section").style.backgroundColor = "black"
    document.getElementById("section").style.color = "white"
    document.getElementById("stock").style.color = "white"
}


let lightmode = () => {
    document.getElementById("body").style.backgroundColor = "rgb(243, 243, 243)"
    document.getElementById("topbar").style.backgroundColor = "green"
    document.getElementById("section").style.backgroundColor = "white"
    document.getElementById("section").style.color = "black"
    document.getElementById("stock").style.color = "black"
}