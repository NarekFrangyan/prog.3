function matrixGenerator(matrixSize,grass,grassEater,predator,mushroom,qar,car,amenaker) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
        matrix[i].push(0)
        
        }
    }


    for (let i = 0; i < grass; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1
        
    }

    for (let i = 0; i < grassEater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2
        
    }
    


    for (let i = 0; i < predator; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

        
    }
    for (let i = 0; i < mushroom; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4

        
    }

    for (let i = 0; i < qar; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5

        
    }
    for (let i = 0; i < car; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6

        
    }
    for (let i = 0; i < amenaker; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 7

        
    }




    return matrix
}

var matrix = matrixGenerator(30,40,10,0,4,15,3,15)
var side = 25
//
var grassArr = []
var grassEaterArr = []
var predatorArr = [] 
var mushroomArr = []
var qarArr = []
var carArr = []
var amenakerArr = []


function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side ,matrix.length * side)
    
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y)
                grassArr.push(gr)
                
            }else  if(matrix[y][x] == 2){
                var grEat = new GrassEater(x,y)
                grassEaterArr.push(grEat)
                
            }else if(matrix[y][x] == 3){
                var pred = new Predator(x,y)
                predatorArr.push(pred)
                
            }else if(matrix[y][x] == 4){
                var mush = new Mushroom(x,y)
                mushroomArr.push(mush)
                
            }else if(matrix[y][x] == 5){
                var qar = new Qar(x,y)
                qarArr.push(qar)
                
            }else if(matrix[y][x] == 6){
                var car = new Car(x,y)
                carArr.push(car)

            }else if(matrix[y][x] == 7){
                var amen = new Amenaker(x,y)
                amenakerArr.push(amen)
            }
        }
    }


}



function draw() {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          
                if(matrix[y][x] == 1){
                     fill ("green")

                }else if (matrix[y][x] == 2){
                        fill ("yellow")

                }else if(matrix[y][x] == 3){
                            fill ("red")

                }else if (matrix[y][x] == 4){
                    fill ("white")

                }else if (matrix[y][x] == 5){
                    fill ("blue")

                }else if (matrix[y][x] == 6){
                    fill ("black")
            
                }else if (matrix[y][x] == 7){
                    fill ("orange")
            
                }else{
                
                    fill ("gray")

                   
                }
              
                rect (x * side , y * side ,side,side)
                  }
        }
        for(let i in  grassArr){
            grassArr[i].mul()
      }

      for(let i in  grassEaterArr){
        grassEaterArr[i].eat()
        
  }

     for(let i in predatorArr){
         predatorArr[i].mul()
     }
  
     for(let i in mushroomArr){
        mushroomArr[i].eat()
    }


    for(let i in qarArr){
        qarArr[i].eat()
    }

    
    for(let i in carArr){
        carArr[i].mul()
    }
    
    for(let i in amenakerArr){
        amenakerArr[i].eat()
        
  }
     }
       