var LiveForm = require("./LiveForm");
var random = require("./random");
var GrassEater = require("./GrassCreater")

module.exports = class GrassEaterCreater extends LiveForm {
    constructor(x, y) {
        super(x,y)
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
        let newCell = random(emptyCells);
        grassCreaterHashiv++;

        if (newCell && this.multiply >= 1) {
            // grassHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grassEaterCreater = new GrassEater(x, y);
            grassEaterCreaterArr.push(grassEaterCreater);
            this.multiply = 0;
        }
    }
}