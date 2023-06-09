Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: convertToPigLatin("a");
Expected Output: "away"

Test: "It should convert a word starting with a consonant to Pig Latin"
Code: const result = convertToPigLatin('banana');
Expected Output: "ananabay"

Test: "It should handle words with capitalized first letter"
Code: const result = convertToPigLatin('Hello');
Expected Output: "elloHay"

Test: "It should return an empty string when given an empty word"
Code: const result = convertToPigLatin('');
Expected Output: ('')

Test: "It should return the same word when there are no vowels"
Code: const result = convertToPigLatin('rhythm');
Expected Output: "rhythm"

Test: "It should convert a sentence with multiple words to Pig Latin"
Code: const sentence = 'Hello world! This is a test.';
      const words = sentence.split(' ');
Expected Output: const expected = 'Ellohay orldway! Histay isway away esttay.';

Code: const result = words.map(convertToPigLatin).join(' ');
Expected Output: expected

(word.toLowerCase().startsWith('qu')) {
    firstVowelIndex = 2;
  }
Test: "It should move the "q" and the "u." for words starting with ("qu")"
Code: const result = convertToPigLatin('quick');
Expected Output: "ickquay"

(word.toLowerCase().startsWith('squ')) {
    firstVowelIndex = 1;
  }
Test: "It should work normally for words starting with ("squ")"
Code: const result = convertToPigLatin('squeal');
Expected Output: "quealsay"