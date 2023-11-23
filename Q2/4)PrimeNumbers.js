var array = [1,2,3,4,5,6,7,8,9,10,11,12];

primeNumbers = (arr) =>
{
    var res = [];
    for(var i in arr)
    {
        var prime = true;
        var n = arr[i]
        if(n > 1)
        {
            for(var j=2; j<n; j++)
            {
                if(n % j == 0)
                {
                    prime = false;
                }
            }
            if(prime == true)
                res.push(n);
        }
    }
    return res;
}

console.log("Q4. Prime Numbers: " , primeNumbers(array));