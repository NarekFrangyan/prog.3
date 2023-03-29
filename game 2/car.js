let LivingCreature = require("./LivingCreature") 
module.exports = class Car extends LivingCreature{
    constructor(x,y){
           super(x, y)
            this.multiply = 0;
            this.directions = [
               
            ];
        
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

      
        random(ch){
            let found = this.chooseCell(ch);
            let result = Math.floor(Math.random()*found.length)
            return found[result];
        }
        mul() {
            // let emptyCell = this.chooseCell(0);
            // let newCell = random(emptyCell)
            var newCell = this.random(0)
            if (newCell && this.energy > 3) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                let car = new Car(newX, newY);
                matrix[newY][newX] = 6;
               carArr.push(car);
    
                this.energy = 5;
            }
        }
    
        move() {
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell)
    
            if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                matrix[newY][newX] = 6;
                matrix[this.y][this.x] = 0;
    
               
                this.x = newX;
                this.y = newY;
    
                this.energy--
    
                if (this.energy < 0) {
                    this.die()
                }
            } 
        }

       
        die() {
            for (let i = 0; i < carArr.length; i++) {
                if (carArr[i].x == this.x && carArr[i].y == this.y) {
                   carArr.splice(i, 1)
                }
            }
            matrix[this.y][this.x] = 0;
        }
    }
    
    
    