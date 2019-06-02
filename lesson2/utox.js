
class Utox {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multyply = 0
        this.energy = 50;
        this.directions = [];
        this.movement = 0



    }
    choosecell( ch1, ch2) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }






    stanalNorKordinatner() {
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

    eat() {
        this.stanalNorKordinatner();
        var norVandak = this.choosecell(3, 2,);
        var choosecell = random(norVandak)
        if (choosecell) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = choosecell[1];
            this.x = choosecell[0];
            matrix[this.y][this.x] = 6

            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }


        }
        else {
            this.move();

        }

    }



    move() {
        this.stanalNorKordinatner();
        var norVandak = this.choosecell( 0);
        var choosecell = random(norVandak)
        if (choosecell) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = choosecell[1];
            this.x = choosecell[0];
            matrix[this.y][this.x] = 6;



        }


    }

    mult() {
        this.movement++;
        var norVandak = random(this.choosecell(0));
        if (norVandak) {
            if (this.energy >= 70) {
                var norUtox = new Utox(norVandak[0]);
                UtoxArr.push(norUtox);
                matrix[norVandak[1]][norVandak[0]] = 6;
                this.energy = 60;
            }
        }

    }



    die() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in utoxArr) {
                if (this.y == utoxArr[i].y && this.x == utoxArr[i].x) {
                    utoxArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}