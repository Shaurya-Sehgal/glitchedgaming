let correct = "qGphJD"
let successful = 0
function verify(){
    let givencaptcha = document.getElementById("givencaptcha").value
    if(correct == givencaptcha){
        setTimeout(function (){
            location.href = "game-subscription.html"
        },1000)
        document.getElementById("incorrect").innerHTML =  "Correct Captcha!<br> Redirecting..."
        document.getElementById("incorrect").style.color =  "green"
        document.getElementById("givencaptcha").style.backgroundColor =  "rgba(0, 128, 0, 0.218)"
        document.getElementById("givencaptcha").style.borderColor =  "lime"
        document.getElementById("givencaptcha").style.boxShadow =  "0 0 20px lime"
        document.getElementById("givencaptcha").style.color = "white"
    }
    else{
        document.getElementById("incorrect").innerText =  "Incorrect Captcha"
        document.getElementById("givencaptcha").style.backgroundColor = "rgba(255, 0, 0, 0.218)"
        document.getElementById("givencaptcha").style.borderColor = "red"
        document.getElementById("givencaptcha").style.color = "white"
        document.getElementById("givencaptcha").style.boxShadow = "0 0 20px red"

    }
}