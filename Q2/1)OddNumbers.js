var array = [1,2,3,4,5,6,7,8,9,10];

printOddNumbers = (arr) =>
{
    var res = [];
    for(var i in arr)
    {
        if(arr[i] % 2 != 0)
            res.push(arr[i]); 
    }
    return res;
}

console.log("Q1. The odd numbers: ", printOddNumbers(array));