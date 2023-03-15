class Qar  extends LivingCreature{
    constructor(x,y){
           super(x, y)
            this.multiply = 0
            this.directions = []  
             
        
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
            chooseCell(ch) {    
            this.getNewCoordinates();
            return this.super.chooseCell(ch);
        }
        eat() {
            let emptyCell = this.chooseCell();
            let newCell = random(emptyCell)
    
            if (newCell) {
                this.energy += 5;
                let newX = newCell[0];
                let newY = newCell[1];
    
                for (let i = 0; i < mushroomArr.length; i++) {
                    if (mushroomArr[i].x == newX && mushroomArr[i].y == newY) {
                        mushroomArr.splice(i, 1)
                        break;
                    }
                }
    
                matrix[newY][newX] = 5;
                matrix[this.y][this.x] = 0;
    
                this.x = newX;
                this.y = newY;
    
                if (this.energy > 30) {
                    this.mul()
                }
            } 
            
            
            
            else {
                this.move()
            }
        }
    
        mul() {
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell)
       
            if (newCell && this.energy > 6) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                let pred = new Qar(newX, newY);
                matrix[newY][newX] = 5;
               qarArr.push(pred);
    
                this.energy = 7;
            }
        }
        move() {
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell)
    
            if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                matrix[newY][newX] = 3;
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
            for (let i = 0; i < qarArr.length; i++) {
                if (qarArr[i].x == this.x && qarArr[i].y == this.y) {
                   qarArr.splice(i, 1)
                }
            }
        
        
            matrix[this.y][this.x] = 0;
        }
    
    }
    
      
    
    
    
    