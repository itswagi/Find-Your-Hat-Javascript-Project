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

  updateLocation(){
    let userInput = prompt('Which direction to move: ')
    userInput = userInput.toLowerCase()
    console.log(userInput)
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print()
myField.updateLocation()