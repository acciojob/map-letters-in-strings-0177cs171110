function mapLetters(word) {
    const letterMap = {};

    // Iterate over the characters of the word
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        // If the letter is not already in the map, initialize an empty array for its indices
        if (!letterMap.hasOwnProperty(letter)) {
            letterMap[letter] = [];
        }

        // Add the index of the current occurrence of the letter to its array of indices
        letterMap[letter].push(i);
    }

    return letterMap;
}
