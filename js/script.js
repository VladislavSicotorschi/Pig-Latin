//Vladislav Sicotorschi 7/7/2023 Pig Latin Project

//create all the global varialbes needed for the project

let textInput = document.getElementById('textInput');
let textOutput = document.getElementById("textOutput");
const noTextInput = 'Write a word or phrase to translate';
const vowels = ['e','i','a','o','u'];
const vowelEnding = 'way';
const ending = 'ay';

function idol() {
    const input = textInput.value;
    if (input.length <= 1) {
      textOutput.innerText = noTextInput;
    } else {
      const output = convertToPigLatin(input);
      textOutput.innerText = output;
    }
}
//create an event listener for when hte user is typing
textInput.addEventListener('keyup', (e) => {
    const input = e.target.value;
    if (input.length <= 1) {
        textOutput.innerText = noTextInput;
    }else {
    //split each word with this to make an array of words
    const words = input.split(' ');
    const output = words.map(word => convertToPigLatin(word)).join(' ');
    textOutput.innerText = output;  
    } 
});
//create a seperate variable for the function
const convertToPigLatin = (input) => {
     //check if it starts in a vowel, then just add the correct ending
    if(vowels.includes(input[0])){
        output = input + vowelEnding;
    }
    //check for constants in the words
    else {
        let consonants = '';
        for(let i = 0; i < input.length; i++) {
            if (vowels.includes(input[i])){
                break;
            }
            consonants += input[i];
        }
        output = input.substring(consonants.length) + consonants + ending;
    }
    

    //Translate here and display new text
    return output;
}

