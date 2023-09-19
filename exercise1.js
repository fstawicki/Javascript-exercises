//capitalize every other letter in a sentence. First letter need to be capital letter. Consider letters as characters

const capitalize = (sentence) => {

    let newSentence = [...sentence];
    console.log(newSentence);
    
    newSentence.forEach((character, index) => {
      newSentence[index] = character.toLowerCase();
      if(index % 2 === 0){
        newSentence[index] = character.toUpperCase();
      }else{
        return newSentence[index];
      }
    })

    return(newSentence.join(""));

}


console.log(capitalize("HELLO!"));
console.log(capitalize("Hello World!"));
console.log(capitalize("hello!"));