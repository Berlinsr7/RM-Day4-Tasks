//Anonymous Function
var arr1 = [1,4,2,3,5,8,6,5];
var arr2 = [7,3,2,4,8,1,3,5];

var median = function(arr1,arr2)
{
    arr1.sort();
    arr2.sort();
    var median1 = getMedian(arr1);
    var median2 = getMedian(arr2);
    return (median1+median2)/2;
}

function getMedian(arr)
{
    var len = arr.length;
    var n = Math.trunc(len/2);
    if(len % 2 == 0)
    {
        return (arr[n]+arr[n-1])/2;
    }
    else
        return arr[n];
}

console.log("Q6. Median of two sorted arrays using Anonymous Function: ", median(arr1,arr2));

//------------------------------------------------------------------------------------

//IIFE:

(function(arr1,arr2)
{
    arr1.sort();
    arr2.sort();
    var median1 = getMedian(arr1);
    var median2 = getMedian(arr2);
    console.log("Median of two sorted arrays using Anonymous Function: ", (median1+median2)/2);
})([1,4,2,3,5,8,6,5],[7,3,2,4,8,1,3,5]);

function getMedian(arr)
{
    var len = arr.length;
    var n = Math.trunc(len/2);
    if(len % 2 == 0)
    {
        return (arr[n]+arr[n-1])/2;
    }
    else
        return arr[n];
}