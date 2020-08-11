const TennisGame1 = function (player1Name, player2Name) {
  this.player1Score = 0;
  this.player2Score = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

function getNumericalStringScore(score) {
    const scoreStrings = ["Love", "Fifteen", "Thirty", "Forty"]; 
    
    return scoreStrings[score];
}

function combineNumericalStringScore(player1Score, player2Score) {
    if (player1Score === player2Score)  {
        return getNumericalStringScore(player1Score) + "-All"
    }
    
    return getNumericalStringScore(player1Score) + "-" + getNumericalStringScore(player2Score);
}

//was not sure what this state of the game is called, for now I called it Ongoing
function isSetOngoing(player1Score, player2Score){
   return (player1Score < 4 && player2Score < 4) && (player1Score + player2Score < 6);
}

function getAdvantageStringScore(player){
    return "Advantage" + " " + player; 
} 

function getWinningStringScore(player){
    return "Win for" + " " + player; 
} 

function isAdvantage(player1Score, player2Score){
    return (player1Score - player2Score) * (player1Score - player2Score) === 1; 
}

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === this.player1Name) {
      this.player1Score += 1;
    } else {
      this.player2Score += 1;
    }
};

TennisGame1.prototype.getHigherScorePlayerName = function () {
    return this.player1Score > this.player2Score ? this.player1Name : this.player2Name ; 
}

TennisGame1.prototype.getScore = function () {
    
    if (isSetOngoing(this.player1Score, this.player2Score)) {
        
        return combineNumericalStringScore (this.player1Score, this.player2Score)
    }
    else {
       
        if (this.player1Score === this.player2Score) { 
            return "Deuce";
        }

        return isAdvantage(this.player1Score, this.player2Score) ? 
                getAdvantageStringScore(this.getHigherScorePlayerName()) :
                getWinningStringScore(this.getHigherScorePlayerName());
    }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
