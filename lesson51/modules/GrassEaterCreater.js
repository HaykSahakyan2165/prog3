var LiveForm = require("./LiveForm");
var random = require("./random");
var GrassEater = require("./GrassEater")

module.exports = class GrassEaterCreater extends LiveForm {
    constructor(x, y) {
        super(x,y)
        this.multiply = 0;
    //     this.x = x;
    //     this.y = y;
    //     this.multiply = 0
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ]
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 

    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        // let newCell1 = this.chooseCell(1);
        // let newCell = random(emptyCells.concat(newCell1));
        let newCell = random(emptyCells);

        if (newCell) {
            // grassHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            console.log(1)
            let grassEaterCreater = new GrassEater(x, y);
            grassEaterCreaterArr.push(grassEaterCreater);
            this.multiply = 0;
        }
    }
}