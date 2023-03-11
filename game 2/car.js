class Car {
    constructor(x,y){
            this.x = x
            this.y = y
            this.multiply = 0
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
    
    
    