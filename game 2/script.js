const socket = io()

var side = 25
//
// var grassArr = []
// var grassEaterArr = []
// var predatorArr = [] 
// var mushroomArr = []
// var qarArr = []
// var carArr = []
// var amenakerArr = []


function setup() {
    frameRate(15)
    createCanvas(50* side, 50 * side)

    //     for (let y = 0; y < matrix.length; y++) {
    //         for (let x = 0; x < matrix[y].length; x++) {

    //             if(matrix[y][x] == 1){
    //                 var gr = new Grass(x,y)
    //                 grassArr.push(gr)

    //             }else  if(matrix[y][x] == 2){
    //                 var grEat = new GrassEater(x,y)
    //                 grassEaterArr.push(grEat)

    //             }else if(matrix[y][x] == 3){
    //                 var pred = new Predator(x,y)
    //                 predatorArr.push(pred)

    //             }else if(matrix[y][x] == 4){
    //                 var mush = new Mushroom(x,y)
    //                 mushroomArr.push(mush)

    //             }else if(matrix[y][x] == 5){
    //                 var qar = new Qar(x,y)
    //                 qarArr.push(qar)

    //             }else if(matrix[y][x] == 6){
    //                 var car = new Car(x,y)
    //                 carArr.push(car)

    //             }else if(matrix[y][x] == 7){
    //                 var amen = new Amenaker(x,y)
    //                 amenakerArr.push(amen)
    //             }
    //         }
    //     }


    // }
}


    function changeColor(matrix) {

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green")

                } else if (matrix[y][x] == 2) {
                    fill("yellow")

                } else if (matrix[y][x] == 3) {
                    fill("red")

                } else if (matrix[y][x] == 4) {
                    fill("white")

                } else if (matrix[y][x] == 5) {
                    fill("blue")

                } else if (matrix[y][x] == 6) {
                    fill("black")

                } else if (matrix[y][x] == 7) {
                    fill("orange")

                } else {

                    fill("gray")


                }


                rect(x * side, y * side, side, side)
            }
        }
       
}

socket.on("send matrix", changeColor)