// Reverse words in a sentence: Write a function to reverse the order of words in a given sentence.

const reverseWordsOrder = (sentence) => {
    return sentence.split(' ').reverse().join(' ')
}

const givenSentence = 'Hello world this is JavaScript'
const result = reverseWordsOrder(givenSentence)
console.log(result)
