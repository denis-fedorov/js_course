/*  
    Merge two arrays into one and delete duplicate elements (without using sets)
*/

function mergeArrays(source1, source2)
{
    if (!Array.isArray(source1) || !Array.isArray(source2))
    {
        throw 'The input value is not an array';
    }

    let all_elements = source1.concat(source2);
    let result = all_elements.filter((cur, i) => all_elements.indexOf(cur) === i);
    
    return result;
}

let source1 = [1, 2, 3, 4, 5, 6];
let source2 = [4, 6, 1, 7, 2, 8];
console.log('A source array 1: ' + source1);
console.log('A source array 2: ' + source2);

let result = mergeArrays(source1, source2);
console.log('A merged array: ' + result);