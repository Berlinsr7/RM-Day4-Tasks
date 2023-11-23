//Anonymous function:
var array = ["Malayalam", "Demo", "Mom", "Cat"];

var palindrome = function(arr)
{
    for(var i in arr)
    {
        var element = arr[i].toLowerCase();
        if(element != reverseString(element))
            arr.splice(i,1);
    }
    return arr;
}

function reverseString(str)
{
    return str.split("").reverse().join("");
}

console.log("Q5. Palindrome by Anonymous Function: ", palindrome(array));

//------------------------------------------------------------------------------------

//IIFE:

(function(arr)
{
    for(var i in arr)
    {
        var element = arr[i].toLowerCase();
        if(element != reverseString(element))
            arr.splice(i,1);
    }
    console.log("Palindrome by IIFE: ", arr);
})(["Malayalam", "Demo", "Mom", "Cat"]);

function reverseString(str)
{
    return str.split("").reverse().join("");
}