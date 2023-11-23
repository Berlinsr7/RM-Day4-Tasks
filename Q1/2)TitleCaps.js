//Anonymous Function:
var players = ["rohit","virat","gill","rahul"];

var titleCaps = function(players)
{
    for(var i in players)
    {
        players[i] = players[i].charAt(0).toUpperCase() + players[i].substring(1);
    }
    return players;
}

console.log("Q2. Title Caps using Anonymous Function: ", titleCaps(players));

//---------------------------------------------------------------------------------------

//IIFE
(function(players)
{
    for(var i in players)
    {
        players[i] = players[i].charAt(0).toUpperCase() + players[i].substring(1);
    }
    console.log("Title Caps using IIFE: ", players);
})(["rohit","virat","gill","rahul"]);
