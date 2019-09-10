/*
    Parse an input string and convert the first letter of each word to upper case
*/

function toUpper(str)
{
    let words = str.split(' ');
    let result = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));

    return result.join(' ');
}

let source = 'sic transit gloria mundi';
console.log('Original string: ' + source);
console.log('Updated string: ' + toUpper(source));