class Grass extends LivingCreature {
    constructor(x,y){
            
            super(x, y)
            this.multiply = 0;
    
    
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x    , this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y    ],
                [this.x + 1, this.y    ],
                [this.x - 1, this.y + 1],
                [this.x    , this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        
        }

    chooseCell(ch){

           this.getNewCoordinates();
           return this.super.chooseCell(ch);
    }

    mul(){
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)

            if(this.multiply >= 8 && newCell){
                  var newX  = newCell[0]
                  var newY = newCell[1]

                  matrix[newY][newX] = 1

                  var gr  = new Grass(newX,newY)
                  grassArr.push(gr)
                  this.multiply = 0
            }

    }
}
