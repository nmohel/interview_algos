// Given an array of strings output a dictionary/map showing how many permutations there are of each string in the array
// Input ['cat', 'act', 'dog', 'moose', 'life', 'file']
// Output {'cat': 2, 'dog': 1, 'moose': 1, 'life': 2}

function isAnagram(a, b) { // takes two words (a and b) and determines if they are anagrams of eachother
    // If the words are not the same length we know immediately they are not anagrams
    if (a.length != b.length) {
        return false;
    } else {
        var temp = b;
        // loop through all the characters in the first word
        for (var i=0; i<a.length; i++) {
            let char = a[i];
            let foundMatch = false;
            // loop through characters in second word and check if any match the current character.
            for (var j=0; j<temp.length; j++) {
                if (temp[j] == char) {
                    foundMatch = true;
                    // once a matching character is found, remove it from the temp string so the
                    // next char is only looking for matches from the remaining letters
                    temp = temp.substring(0,j) + temp.substring(j+1);
                    break; //move on to a new character after a match is found
                }
            }
            // if no matching characters are found in the second string, it's not an anagram
            if (foundMatch == false) {
                return false;
            }
        }
        // if it's gone through everything above and never returned false, they are anagrams
        return true;
    }
}

 
/* 
// TEST isAnagram()

var wordA = 'not'
var wordB = 'ton'
var wordC = 'tin'
var wordD = 'tang'
var wordE = 'pool'
var wordF = 'loop'

console.log(isAnagram(wordA, wordB)) // expected output: true;
console.log(isAnagram(wordB, wordC)) // expected output: false;
console.log(isAnagram(wordC, wordD)) // expected output: false;
console.log(isAnagram(wordE, wordF)) // expected output: true;
*/


function permutations(arr) {
    var output = {};

    // loop through all the words in the array
    for(var i=0; i<arr.length; i++) {
        var word = arr[i];
        var inOutput = false;

        // check all the keys in the output to see if the current word is an anagram of any of them
        for(key in output) {
            if (isAnagram(word, key)) { // if it is an anagram, update the value of that key
                output[key] += 1;
                inOutput = true;
                break; // no need to keep checking if anagram is found
            }
        }
        // if all the keys in the output have been checked and it's not an anagram of any of them
        // it means the word/any anagrams of it are not yet in the output, so add it to the output
        if (inOutput == false) {
            output[word] = 1;
        }
    }

    return output;
}

/* 
// TEST permutations()

var inputArray = ['cat', 'act', 'dog', 'moose', 'life', 'file']
console.log(permutations(inputArray)) // expected output: {'cat': 2, 'dog': 1, 'moose': 1, 'life': 2} 
 */