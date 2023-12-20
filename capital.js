function capitalize(sentence) {
    const lower = sentence.toLowerCase()
    const capital = lower.charAt(0).toUpperCase() + lower.slice(1)
    return capital
}

console.log (capitalize("nEver"))