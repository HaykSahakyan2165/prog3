var side = 16;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var arajArr = [];
var arajaArr = [];
var utoxArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gs = new Gishatich(x, y)
                gishatichArr.push(gs)
            }
            else if (matrix[y][x] == 4) {
                var ar = new Araj(x, y)
                arajArr.push(ar)
            }
            else if (matrix[y][x] == 5) {
                var aj = new Araja(x, y)
                arajaArr.push(aj)
            }
            else if (matrix[y][x] == 6) {
                var ut = new Utox(x, y)
                utoxArr.push(ut)
            }

            
           
           
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}


var matrix = [];
for (var i = 0; i < 40; i++) {
    matrix.push([]);
    for (var h = 0; h < 40; h++) {
        matrix[i][h] = Math.floor(Math.random() * 2);
    }
}
for (var u = 0; u <= 10; u++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}

for (var o = 0; o <= 15; o++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}
for (var r = 0; r <= 4; r++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var q = 0; q <= 2; q++) {
    matrix[Math.round(Math.random() * 40)][Math.round(Math.random() * 40)] = 5;
}
for (var v = 0; v <= 20; v++) {
    matrix[Math.round(Math.random() * 36)][Math.round(Math.random() * 40)] = 6;
}



function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
            }


            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in arajArr) {
        arajArr[i].arajacum()
    }
    for (var i in arajaArr) {
        arajaArr[i].arajacum()
    }
    for (var i in utoxArr) {
        utoxArr[i].eat()
        utoxArr[i].move()
        utoxArr[i].mult()
        utoxArr[i].die()
    }

   
}