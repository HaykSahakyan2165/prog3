var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Predator extends LiveForm  {
    constructor(x, y) {
        super(x,y)
        // this.x = x;
        // this.y = y;
        this.life = 20;
        // this.directions = [];
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

    // chooseCell(character) {
    //     this.getNewDirections()
    //     var found = []
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0]
    //         var y = this.directions[i][1]
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == character) {
    //                 found.push(this.directions[i])
    //             }
    //         }

    //     }
    //     return found;

    // }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 

    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            let predator = new Predator(x, y);
            predatorArr.push(predator);
            this.life = 15;
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.life--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 25) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in predatorArr) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1)
            }
        }
    }
}