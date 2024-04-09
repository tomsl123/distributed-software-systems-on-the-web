function concatenateStrings(strings, delimiter = ', ') {
    return strings.join(delimiter);
}

const words = ['Hello', 'world', 'of', 'JavaScript'];
const sentence = concatenateStrings(words);

console.log(sentence);
