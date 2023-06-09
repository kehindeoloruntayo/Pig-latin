// Business Logic
function isNumber(word) {
  return !isNaN(word);
}

function convertToPigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the word is a number
    if (isNumber(word)) {
      return word;
    }
  
    // Check if the word starts with a vowel
    if (vowels.includes(word[0].toLowerCase())) {
      return word + 'way';
    }
  
    // Find the index of the first vowel
    let firstVowelIndex = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        firstVowelIndex = i;
        break;
      }
    }

  // Handle special case for "squ"
  if (word.toLowerCase().startsWith('squ')) {
    firstVowelIndex = 1;
  }

  // Handle special case for "qu"
  else if (word.toLowerCase().startsWith('qu')) {
    firstVowelIndex = 2;
  }
  
  // Move the consonants to the end and add "ay"
  const consonants = word.substring(0, firstVowelIndex);
  const restOfWord = word.substring(firstVowelIndex);
  return restOfWord + consonants + 'ay';
  }

  function convertSentenceToPigLatin(sentence) {
  const words = sentence.trim().split(" "); // Split the sentence into individual words
  let pigLatinSentence = "";

  // Convert each word to Pig Latin
  words.forEach(function(word) {
    const pigLatinWord = convertToPigLatin(word);
    pigLatinSentence += pigLatinWord + " ";
  });

  return pigLatinSentence.trim();
}

  // UI logic
  $(document).ready(function() {
    $("#pig-latin-btn").click(function(event) {
      event.preventDefault();
      const sentence = $("#pig-latin-word").val();
      const pigLatinSentence = convertSentenceToPigLatin(sentence);
      $("#pig-latin-result").text(pigLatinSentence);
    });
  });