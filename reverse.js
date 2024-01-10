function reverseString(word) {
    let count = word.length;
    let lastLetter = word[count-1];
    let reversed = "";
    for (let i = 0; i < count; i++) {
        reversed += word[count-1-i]
    }
    return reversed;
};

console.log(reverseString ("hello"));