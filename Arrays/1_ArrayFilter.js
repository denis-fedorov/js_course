/*  
    Apply a filter to an input array:
    if a current element is outside (min, max) range - delete it.
*/

function applyFilter(source, min, max)
{
    if (!Array.isArray(source))
    {
        throw 'The input value is not an array';
    }

    for (let i = 0; i < source.length; i++)
    {
        let current = source[i];
        if (current <= min || current >= max)
        {
            source.splice(i, 1);
            i--;
        }
    }
}

let source = [10, 3, 6, 11, 25, 8];
let leftBorder = 7;
let rightBorder = 17;

console.log('A source array: ' + source);
applyFilter(source, leftBorder, rightBorder);
console.log('A filtered array: ' + source);