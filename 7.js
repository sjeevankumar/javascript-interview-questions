// Count the number of vowels in a string: Write a function that counts the number of vowels in a given string.

const checkVowel = (char) => {
    const vowelsList = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vowelsList.length; i++) {
        if (char === vowelsList[i]) {
            return true
        }
    }
    return false
}

const countVowels = (str) => {
    const strLen = str.length
    let vowelCount = 0
    for (let i = 0; i < strLen; i++) {
        const isVowel = checkVowel(str[i])
        if (isVowel) {
            vowelCount += 1
        }
    }
    return vowelCount
}

const given_string = 'aaaaabb'
const vowelsCount = countVowels(given_string)
console.log(`number of vowels in a given string are ${vowelsCount}`);