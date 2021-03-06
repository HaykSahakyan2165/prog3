
//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Predator.js");
var GrassCreater = require("./modules/GrassCreater.js");
var GrassEaterCreater = require("./modules/GrassEaterCreater.js");
var Amulet = require("./modules/Amulet.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
predatorArr = [];
grassCreaterArr = [];
amuletArr = [];
grassEaterCreaterArr = [];
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
grassCreaterHashiv = 0;
predatorHashiv = 0;
grassCreaterHashiv = 0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, grassEater, predator, grassCreater,grassEaterCreater, amulet) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < grassCreater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < grassEaterCreater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (let i = 0; i < amulet; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }

}
matrixGenerator(10, 1, 5, 3, 1, 1,1);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
            }else if (matrix[y][x] == 4) {
                var grassCreater = new GrassCreater(x, y);
                grassCreaterArr.push(grassCreater);
            }else if (matrix[y][x] == 5) {
                var amulet = new Amulet(x, y);
                amuletArr.push(amulet);
            }else if (matrix[y][x] == 6) {
                var grassEaterCreater = new GrassEaterCreater(x, y);
                grassEaterCreaterArr.push(grassEaterCreater);
            }
        }
    }
}
creatingObjects();

function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
    }
    if (grassCreaterArr[0] !== undefined) {
        for (var i in grassCreaterArr) {
            grassCreaterArr[i].mul();
            // console.log(5);/
        }
    }
    if (grassEaterCreaterArr[0] !== undefined) {
        for (var i in grassEaterCreaterArr) {
            grassEaterCreaterArr[i].mul();
        }
    }
    if (amuletArr[0] !== undefined) {
        for (var i in amuletArr) {
            amuletArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEatersCounter: grassEaterHashiv,
        grassCreatersCounter: grassCreaterHashiv,
        predatorCounter: predatorHashiv,
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 300);
