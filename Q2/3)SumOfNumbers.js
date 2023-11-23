var array = [1,2,3,4,5,6,7,8,9,10];

sum = (arr) =>
{
    var sum = 0;
    for(var i in arr)
        sum += arr[i];
    return sum;
}

console.log("Q3. Sum of all numbers: ", sum(array));