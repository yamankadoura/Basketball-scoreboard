const homeTeamScore = document.getElementById("home-team-score");
const guestTeamScore = document.getElementById("guest-team-score");

let homeTeamPoint = 0
let guestTeamPoint = 0
resetAll()

function resetAll() {
    homeTeamPoint = 0
    guestTeamPoint = 0
    homeTeamScore.textContent = homeTeamPoint
    guestTeamScore.textContent = guestTeamPoint
}

function HomeAdd(value) {
    homeTeamPoint += value
    homeTeamScore.textContent = homeTeamPoint
}

function GuestAdd(value) {
    guestTeamPoint += value
    guestTeamScore.textContent = guestTeamPoint
}