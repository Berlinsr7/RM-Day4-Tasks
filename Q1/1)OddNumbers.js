//Anonymous function:
var array = [1,2,3,4,5,6,7,8,9,10];

var printOddNumbers = function(a)
{
    var res = [];
    for(var i in a)
    {
        if(a[i] % 2 != 0)
            res.push(a[i]); 
    }
    return res;
}

console.log("Q1. The odd numbers by Anonymous function: ", printOddNumbers(array));

//------------------------------------------------------------------------------------

//IIFE:
(function(a)
{
    var res = [];
    for(var i in a)
    {
        if(a[i] % 2 != 0)
            res.push(a[i]); 
    }
    console.log("The odd numbers by IIFE: ", res);
})([1,2,3,4,5,6,7,8,9,10]);