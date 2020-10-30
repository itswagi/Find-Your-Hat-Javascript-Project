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
    console.log(this._horizontalPos)
    console.log(this._verticalPos)
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
    this.updateLocation()
   }
 }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.startGame()
//myField.updateLocation()