/*
    Returns the longest word in an input string
*/

function getTheLongestWord(str)
{
    let words = str.split(' ');

    return words
        .map(w => ({ word: w, length: w.length}))
        .sort(function(a, b) { return b.length - a.length })
        [0].word;
}

let source = 'Nemo omnia potest scire';
console.log('The longest word in phrase \'' + source + '\' is: ' + getTheLongestWord(source));