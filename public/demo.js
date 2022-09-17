//function to get the value of the input field
function wordToNumber(word) {
    let num = 0;
    switch (word) {
        case "one":
            num = 1;
            break;
        case "two":
            num = 2;
            break;
        case "three":
            num = 3;
            break;
        case "four":
            num = 4;
            break;
        case "five":
            num = 5;
            break;

    }
    return num;
}

console.log(wordToNumber('one'));
function getMultiply(word, number) {
    let num = wordToNumber(word);
    return num * number;
}

console.log(getMultiply('one', 2));