let LivingCreature = require("./LivingCreature") 
 module.exports = class Amenaker extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 12;
        this.directions = [];
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
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
   console.log(newCell);
        if (newCell && this.energy > 12) {
            let newX = newCell[0];
            let newY = newCell[1];

            let amen = new Amenaker(newX, newY);
            matrix[newY][newX] = 7;
            amenakerArr.push(amen);

            this.energy = 12;
        }
    }


    eat() {
        let emptyCell = this.chooseCell(3,5);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
           
            for (let i = 0; i < qarArr.length; i++) {
                if (qarArr[i].x == newX && qarArr[i].y == newY) {
                    qarArr.splice(i, 1)
                    break;
                }
            }
           
          

            matrix[newY][newX] = 0;
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
    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 7;
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
        for (let i = 0; i < amenakerArr.length; i++) {
            if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

