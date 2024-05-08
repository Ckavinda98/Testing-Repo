let array = ["HelloWorld"];

function countLetters(array) {
    // Assuming array has only one string element
    let str = array[0];
    let lowercaseCount = 0;
    let uppercaseCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            lowercaseCount++;
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            uppercaseCount++;
        }
    }

    return { lowercaseCount, uppercaseCount };
}

function compareCounts(array) {
    const { lowercaseCount, uppercaseCount } = countLetters(array);
    
    if (lowercaseCount === uppercaseCount) {
        return "Equal";
    } else if (lowercaseCount > uppercaseCount) {
        return "More lowercase letters";
    } else {
        return "More uppercase letters";
    }
}

console.log(countLetters(array));
console.log(compareCounts(array));
