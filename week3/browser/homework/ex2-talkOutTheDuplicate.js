const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
// const newLetters = [];

function removeDuplicates(letters){
    const newLetters = letters.filter((letter,index) => letters.indexOf(letter) == index)
     
    return newLetters;
}
 console.log(removeDuplicates(letters));
