// Check for Anagrams: Write a function to determine if two strings are anagrams of each other.

// listen and silent - Anagrams
const checkAnagrams = (str1,str2) => {
    const str1Len = str1.length
    const str2Len = str2.length
    let matchFound = false
    let isAnagram = true
    for(let i=0;i<str1Len;i++){
        for(j=0;j<str2Len;j++){
            if(str1[i] === str2[j]){
                matchFound = true
                console.log(str1[i], str2[j]);
            }
        }
        if(!matchFound){
            console.log('match not found');
            isAnagram = false
        }
    }
    return isAnagram
}

const first_string = 'listea'
const second_string = 'silent'
const isAnagram = checkAnagrams(first_string, second_string)
if (isAnagram) {
    console.log('Anagram')
} else {
    console.log('Not a Anagram')
}