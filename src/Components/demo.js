
let printValuesOf = (jsObject, keys) => {
    for (let key of keys) {
        console.log(jsObject[key]);
    }
}

let simpsonsCatchphrases = {
    lisa: 'BAAAAAART!',
    bart: 'Eat My Shorts!',
    marge: 'Mmm~mmmmm',
    homer: 'd oh!',
    maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']);

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined
