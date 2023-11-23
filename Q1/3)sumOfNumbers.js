//Anonymous function:
var array = [1,2,3,4,5,6,7,8,9,10];

var sum = function(arr)
{
    var sum = 0;
    for(var i in arr)
        sum += arr[i];
    return sum;
}

console.log("Q3. Sum of all numbers by Anonymous Function: ", sum(array));

//----------------------------------------------------------------------------

//IIFE
(function(arr)
{
    var sum = 0;
    for(var i in arr)
        sum += arr[i];
    console.log("Sum of all numbers by IIFE: ", sum);
})([1,2,3,4,5,6,7,8,9,10]);