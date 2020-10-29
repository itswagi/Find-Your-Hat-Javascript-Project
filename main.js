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
  }
  print(){
    console.log(this._board.join('\n'))
  }

  newLocation(){
    let userInput = prompt('Which direction to move: ')
    userInput = userInput.toLowerCase()
    switch (userInput){
        case 'd':
            this._verticalPos += 1
            break
        case 'u':
            this._verticalPos -= 1
            break
        case 'l':
            this._horizontalPos -= 1
        case 'r':
            this._horizontalPos += 1
    }
  }

  updateLocation(){
      this._board[this._verticalPos][this._horizontalPos] = '*'
  }

  checkWinLoss(){
      if (this._board[this._verticalPos][this._horizontalPos] === 'O'){
          console.log('Congrats, you found your way!')
      }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print()

//myField.updateLocation()