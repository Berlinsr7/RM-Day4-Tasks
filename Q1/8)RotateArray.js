//Anonymous Function
var array = [1,2,3,4,5,6];
var k = 3;

var rotateArray = function(arr, k) 
{
    for (let i = 0; i < k; i++)
    {
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log("Q8. Rotate array by Anonymous Function: ", rotateArray(array,k));

//--------------------------------------------------------------------------------

//IIFE

(function(arr, k) 
{
    for (let i = 0; i < k; i++)
    {
        arr.unshift(arr.pop());
    }
    console.log("Rotate array by IIFE: ", arr);
})([1,2,3,4,5,6],3);