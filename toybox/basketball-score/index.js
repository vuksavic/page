let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrementScoreByOne(team) {
    if (team === "home") { 
        homeScore += 1
        homeScoreEl.innerText = homeScore
    }
    
    else if (team === "guest") { 
        guestScore += 1
        guestScoreEl.innerText = guestScore
    }
}

function incrementScoreByTwo(team) {
    if (team === "home") { 
        homeScore += 2
        homeScoreEl.innerText = homeScore
    }
    
    else if (team === "guest") { 
        guestScore += 2
        guestScoreEl.innerText = guestScore
    }
}

function incrementScoreByThree(team) {
    if (team === "home") { 
        homeScore += 3
        homeScoreEl.innerText = homeScore
    }
    
    else if (team === "guest") { 
        guestScore += 3
        guestScoreEl.innerText = guestScore
    }
}