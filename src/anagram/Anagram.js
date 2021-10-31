function isAnagram(word1, word2){

    if (word1.length !== word2.length){
        return false;
    }

    let letterCounter = {};

    for (let letter of word1){
        if (letterCounter[letter] === undefined){
            letterCounter[letter] = 1;
        } else {
            letterCounter[letter]++;
        }
    }

    for (let letter of word2){
        if (letterCounter[letter] === undefined){
            return false;
        }
        if (letterCounter[letter] < 1){
            return false;
        }
        letterCounter[letter]--;
    }
    return true;
}

export default isAnagram;