//Anonymous Function
var array = [1,2,3,2,1,5];

var removeDuplicates = function(arr)
{
    for(var i in arr)
    {
        var num = arr[i];
        var count = 0;
        for(var j=0; j<arr.length; j++)
        {
            if(num == arr[j])
                count++;
        }
        if(count > 1)
            arr.splice(i,1);
    }
    return arr.sort();
}

console.log("Q7. Removing duplicates using Anonymous Function: ", removeDuplicates(array));

//--------------------------------------------------------------------------------------------

//IIFE

(function(arr)
{
    for(var i in arr)
    {
        var num = arr[i];
        var count = 0;
        for(var j=0; j<arr.length; j++)
        {
            if(num == arr[j])
                count++;
        }
        if(count > 1)
            arr.splice(i,1);
    }
    console.log("Removing duplicates using IIFE: ", arr.sort());
})([1,2,3,2,1,5]);