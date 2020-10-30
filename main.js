const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  constructor(board){
    this._board = board
    this._horizontalPos = 0
    this._verticalPos = 0
    this._continueGame = true
    this._board[0][0] = pathCharacter
  }
  print(){
    console.log(this._board.join('\n'))
  }

  newLocation(){
    let userInput = prompt('Which direction to move: ')
    userInput =  userInput.toLowerCase()
    switch (userInput){
        case 'd':
            this._verticalPos += 1
            break
        case 'u':
            this._verticalPos -= 1
            break
        case 'l':
            this._horizontalPos -= 1
            break
        case 'r':
            this._horizontalPos += 1
            break
    }
  }

  updateLocation(){
      this._board[this._verticalPos][this._horizontalPos] = '*'
  }

  checkWinLoss(){
    if (this._verticalPos > this._board.length || 
      this._verticalPos < 0 ||
      this._horizontalPos > this._board[this._verticalPos].length ||
      this._horizontalPos < 0){
        console.log('You fell off the board B)')
        return false
    } else if (this._board[this._verticalPos][this._horizontalPos] === '^'){
      console.log('Congrats, you found your way!')
      return false
  } else if (this._board[this._verticalPos][this._horizontalPos] === 'O'){
      console.log('You fell in a pit. Oops B)')
      return false
  } else {
    return true
  }
 }

 startGame(){
   while (this._continueGame == true){
    this.print()
    this.newLocation()
    this._continueGame = this.checkWinLoss()
    if (this._continueGame == false){
      break
    }else {
      this.updateLocation()
    } 
   }
 }

 static generateField(height, width, percentage){
    const field = new Array(height).fill(0).map(el => new Array(width))
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }

    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    }
    while (hatLocation.x === 0 && hatLocation.y === 0) {
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.y][hatLocation.x] = hat;
    return field;
 }
}

//const myField = new Field([
//  ['*', '░', 'O'],
//  ['░', 'O', '░'],
 // ['░', '^', '░'],
//]);

const myField = new Field(Field.generateField(10, 10, 0.2));
myField.startGame()
//myField.updateLocation()