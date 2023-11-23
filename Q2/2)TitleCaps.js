var players = ["rohit","virat","gill","rahul"];

titleCaps = (players) =>
{
    for(var i in players)
    {
        players[i] = players[i].charAt(0).toUpperCase() + players[i].substring(1);
    }
    return players;
}

console.log("Q2. Title Caps: ", titleCaps(players));