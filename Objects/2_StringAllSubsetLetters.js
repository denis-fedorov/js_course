/*
    Prints all subsets of letters in a string
*/

String.prototype.getAllSubsets = function()
{
    var result = [];

    for (let i = 0; i < this.length; i++)
    {
        for (let j = i + 1; j <= this.length; j++)
        {
            result.push(this.slice(i, j));
        }
    }

    return result;
}

console.log('word'.getAllSubsets());