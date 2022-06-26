function opengame(game){
    if(game == "ticTacToe"){
        location.href = "https://shaurya-sehgal.github.io/Tic-Tac-Toe/"
    }
    else if(game == "carRace"){
        location.href = "https://shaurya-sehgal.github.io/Car-Race/"
    }
    else if(game == "gol"){
        location.href = "https://shaurya-sehgal.github.io/Game-Of-Luck/"
    }
    else if(game == "CarRace2"){
        location.href = "https://shaurya-sehgal.github.io/carrace2/"
    }
}

function search() {
    document.getElementById("search").value = "Currently Not Working"
    document.getElementById("search").readOnly = true
    document.getElementById("search").style.color = "red"
}