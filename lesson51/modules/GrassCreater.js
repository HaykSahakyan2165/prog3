var LiveForm = require("./LiveForm");
var random = require("./random");
var Grass = require("./Grass")


module.exports = class GrassCreater extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
        this.index = 4
        // this.x = x;
        // this.y = y;
        // this.multiply = 0;
        // this.directions = [
        //     [this.x - 1, this.y - 1],
        //     [this.x, this.y - 1],
        //     [this.x + 1, this.y - 1],
        //     [this.x - 1, this.y],
        //     [this.x + 1, this.y],
        //     [this.x - 1, this.y + 1],
        //     [this.x, this.y + 1],
        //     [this.x + 1, this.y + 1]
        // ]
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
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 


    // create() {
    //     this.multiply++;
    //     let emptyCells = this.chooseCell(0);
    //     let newCell = random(emptyCells);

    //         if (empty) {
    //             var newX = empty[0]
    //             var newY = empty[1]
    //             matrix[newY][newX] = 1
    //             let grass = new Grass(newX, newY)
    //             grassCreaterArr.push(grass)
    //         }
    //     }

    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        // grassCreaterHashiv++;

        if (newCell && this.multiply >= 1 && weather != "Dzmer") {
            // grassHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grassCreater = new Grass(x, y);
            grassCreaterArr.push(grassCreater);
            this.multiply = 0;
        }
    }
}

