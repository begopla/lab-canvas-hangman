class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800)
    this.drawLines();
    }

  drawLines() {
    let space=50;
    this.context.lineWidth = 4;
   for(let i=0; i <this.secretWord.length; i++){
    this.context.moveTo(450+space,700);
    this.context.lineTo(490 + space,700);
    this.context.stroke();
    space +=50;
   }
  }

  writeCorrectLetter(index) {
  let newSpace =50;
  let newWord = ''
  for(let i=0; i< this.secretWord.length; i++){
      if(this.secretWord[i]===index){
        this.context.font = "50px arial bolt";
        this.context.fillText(index.toUpperCase(),500+newSpace*i,680)
        
       newWord = hangman.addCorrectLetter(index)
      }}
      return newWord
   
  }

  writeWrongLetter(letter, errorsLeft) {
   
     let space = 50;
     if(errorsLeft>0){
      this.context.font = "50px arial bolt";
       this.context.fillText(letter.toUpperCase(), 700 +space*(10-errorsLeft), 300 )
       
      }
      
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 4;
   if(errorsLeft ===9){
    
    
    this.context.beginPath();
    this.context.moveTo(300,600);
    this.context.lineTo(200, 700);
    this.context.lineTo(400,700);
    this.context.closePath();
    this.context.stroke();
   }
   if(errorsLeft===8){
    this.context.beginPath();
    this.context.moveTo(300,600);
    this.context.lineTo(300,100);
    this.context.stroke();
   }
   if(errorsLeft===7){
    this.context.lineTo(500,100);
    this.context.stroke();
   }
   if(errorsLeft===6){
   this.context.lineTo(500,150);
   this.context.stroke();
  }
  if(errorsLeft===5){
    this.context.beginPath();
    this.context.arc(500,200,50,0,2*Math.PI)
    this.context.stroke();
  }
  if(errorsLeft===4){
     
    this.context.moveTo(500,250);
    this.context.lineTo(500,450);
    this.context.stroke();
  }
  if(errorsLeft===3){
     this.context.moveTo(500,450);
    this.context.lineTo(575,550);
    this.context.stroke();
  }
  if(errorsLeft===2){
    this.context.beginPath();
    this.context.moveTo(500,450);
    this.context.lineTo(425,550);
    this.context.stroke();
  }
  if(errorsLeft===1){
    this.context.beginPath();
    this.context.moveTo(500,300);
    this.context.lineTo(425,400);
    this.context.stroke();
  }
  if(errorsLeft===0){
    this.context.beginPath();
    this.context.moveTo(500,300);
    this.context.lineTo(575,400);
    this.context.stroke();
  }
  }

  gameOver() {
   if(hangman.checkGameOver()){
     console.log('Sorry, you have lost the game. Please, try again!')
     setTimeout(()=>{
      this.context.clearRect(0,0,1200,800)
       },2000)
   
  //  hangman.pickWord();
  //  this.drawLines();
   }
  }

  winner() {
    
      console.log('Congratulations you have won the game!')
      setTimeout(()=>{
        this.context.clearRect(0,0,1200,800) 
      },1000)
      
      const img = new Image();
      let imgScale = 640/480;
      img.onload = this.context.drawImage(img, 0, 0,150*imgScale,150);
      
      img.src = 'https://images.pexels.com/photos/2403474/pexels-photo-2403474.jpeg?cs=srgb&dl=pexels-run-ffwpu-2403474.jpg';
    }
}

    

    


    

   

    

    