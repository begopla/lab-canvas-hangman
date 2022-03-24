class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters =[];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.newWord = [];
  }

  pickWord() {
    const randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return randomWord;
  }

  checkIfLetter(keyCode) {
    if(keyCode<65) {
      return false; 
    }
    else if (65<=keyCode<=90) {
      return true; 
    }
    else if(keyCode>90) {
      return false; }
    
    else{
      return false;
    }
  }
  
  
  checkClickedLetters(letter) {
  if(this.letters.includes(letter)) return false;
  else{
    this.letters.push(letter);
    return true;
    
  }
  
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    
     for(let i=0; i< this.secretWord.length; i++){
       if(this.secretWord[i]===letter){
        //if(!repeatLetter===this.secretWord[i]){
           this.newWord[i] = letter
         //  repeatLetter = this.guessedLetters[i]
            return this.newWord; 
         }
      }
  }

  addWrongLetter(letter) {
     //true - letter is not there
      this.errorsLeft --;
      return this.errorsLeft;
  
  }

  checkGameOver() {
    if(this.errorsLeft>0) return false; else return true;
  }

  checkWinner(letter) {
    let answer =[...hangmanCanvas.writeCorrectLetter(letter)].join('');
    console.log(answer)
   if(this.secretWord === answer) {
    return true;
  }
   else return false; 
  }
  
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    console.log('GAME ON!')
    //console.log(hangmanCanvas)
    let space = 50;
    //console.log(hangman.secretWord)
    
    hangmanCanvas.createBoard();
    console.log('Enter your first guessed letter when you are ready!')
  });
}

document.addEventListener('keydown', logKey);

function logKey(e){
  //console.log(e.key)
  
  if(!hangman.checkIfLetter(e.keyCode)){
    console.log('Please, type a letter')
    
     } 
    else if( hangman.checkIfLetter(e.keyCode) && hangman.secretWord.includes(e.key)){
      let answer =hangmanCanvas.writeCorrectLetter(e.key).join('');
      
      
     }  
    else if (hangman.checkClickedLetters(e.key)){
      const errorsLeft = hangman.addWrongLetter(e.key)
      //console.log(errorsLeft)
      hangmanCanvas.writeWrongLetter(e.key,errorsLeft)
      hangmanCanvas.drawHangman(errorsLeft)
     }
      
  
 
      hangmanCanvas.gameOver()
     if(hangman.checkWinner(e.key)){

       hangmanCanvas.winner()

     }
     

}


