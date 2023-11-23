var array = ["Malayalam", "Demo", "Mom", "Cat"];

palindrome = (arr) =>
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

console.log("Q5. Palindrome: ", palindrome(array));
