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
    }
    else{
        document.getElementById("incorrect").innerText =  "Incorrect Captcha"
    }
}