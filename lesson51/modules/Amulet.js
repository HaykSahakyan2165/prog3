var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Amulet extends LiveForm {
    constructor(x, y) {
        super(x,y);
        // this.x = x;
        // this.y = y;
        // this.multyply = 0
        this.life = 50;
        // this.directions = [];
        // this.movement = 0



    }
    // choosecell( ch1, ch2) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];

    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

    //             if (matrix[y][x] == ch1) {
    //                 found.push(this.directions[i]);
    //             }
    //             if (matrix[y][x] == ch2) {
    //                 found.push(this.directions[i]);
    //             }

    //         }

    //     }
    //     return found;
    // }






    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x , this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y +1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
        ];
    }

    // eat() {
    //     this.getNewCoordinates();
    //     var norVandak = this.choosecell(3, 2,);
    //     var choosecell = random(norVandak)
    //     if (choosecell) {
    //         this.life++;
    //         matrix[this.y][this.x] = 0;
    //         this.y = choosecell[1];
    //         this.x = choosecell[0];
    //         matrix[this.y][this.x] = 6

    //         for (var i in gishatichArr) {
    //             if (this.y == predatorArr[i].y && this.x == predatorArr[i].x) {
    //                 predatorArr.splice(i, 1);
    //                 break;
    //             }

    //         }
    //         for (var i in grassEaterArr) {
    //             if (this.y == grassEaterArr[i].y && this.x == grassEaterArr[i].x) {
    //                 grassEaterArr.splice(i, 1);
    //                 break;
    //             }

    //         }


    //     }
    //     else {
    //         this.move();

    //     }

    // }
    eat() {
        let newCell1 = this.chooseCell(1);
        let newCell2 = this.chooseCell(2);
        let newCell3 = this.chooseCell(3);
        let newCell = random(newCell1.concat(newCell2,newCell3));

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 80) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }



    // move() {
    //     this.getNewCoordinates();
    //     var norVandak = this.choosecell( 0);
    //     var choosecell = random(norVandak)
    //     if (choosecell) {
    //         this.energy--;
    //         matrix[this.y][this.x] = 0;
    //         this.y = choosecell[1];
    //         this.x = choosecell[0];
    //         matrix[this.y][this.x] = 6;



    //     }


    // }
    move() {
        var empty = random(this.chooseCell(0))
        this.life--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    // mul() {
    //     this.movement++;
    //     var norVandak = random(this.choosecell(0));
    //     if (norVandak) {
    //         if (this.energy >= 70) {
    //             var amulet = new Amulet(norVandak[0]);
    //             amuletArr.push(amulet);
    //             matrix[norVandak[1]][norVandak[0]] = 6;
    //             this.energy = 60;
    //         }
    //     }

    // }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        // amuletHashiv++;

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let amulet = new Amulet(x, y);
            amuletArr.push(amulet);
            this.life = 50;
        }
    }



    // die() {
    //     if (this.energy == 0) {
    //         matrix[this.y][this.x] = 0;
    //         for (var i in amuletArr) {
    //             if (this.y == amuletArr[i].y && this.x == amuletArr[i].x) {
    //                 amuletArr.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     }
    // }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in amuletArr) {
            if (amuletArr[i].x == this.x && amuletArr[i].y == this.y) {
                amuletArr.splice(i, 1)
            }
        }
    }
}