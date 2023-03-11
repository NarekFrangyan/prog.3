class Mushroom {
    constructor(x,y){
            this.x = x
            this.y = y
            this.multiply = 0
            this.directions = [  ];
        
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
        chooseCell(char) {
            this.getNewCoordinates();
            let found = [];
        
        
        for (let i in this.directions) {
                let x = this.directions[i][0];
                let y = this.directions[i][1];
    
    
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                    if (matrix[y][x] == char) {
                        found.push(this.directions[i]);
                    }
                }
    
                
            }
    
            return found;
        }
    
    
        mul() {
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell)
       
            if (newCell && this.energy > 8) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                let pred = new Mushroom(newX, newY);
                matrix[newY][newX] = 4;
               mushroomArr.push(pred);
    
                this.energy = 12;
            }
        }
    
    
        eat() {
            let emptyCell = this.chooseCell(1);
            let newCell = random(emptyCell)
    
            if (newCell) {
                this.energy += 4;
                let newX = newCell[0];
                let newY = newCell[1];
    
                for (let i = 0; i < grassArr.length; i++) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                        break;
                    }
                }
    
              
                matrix[newY][newX] = 8;
                matrix[this.y][this.x] = 0;
    
                this.x = newX;
                this.y = newY;
    
                if (this.energy > 12) {
                    this.mul()
                }
            } 
            
            
            
            else {
                this.move()
            }
        }
    
        move() {
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell)
    
          if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
    
                matrix[newY][newX] = 8;
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
            for (let i = 0; i < mushroomArr.length; i++) {
                if (mushroomArr[i].x == this.x && mushroomArr[i].y == this.y) {
                   mushroomArr.splice(i, 1)
                }
            }
        
        
            matrix[this.y][this.x] = 0;
        }
    
    
    }
    