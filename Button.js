class Button{
    constructor(label, x, y){
        this.label = label
        this.x = x
        this.y = y
        }
        draw(){
            if (this.containsMouse()){
                fill ("lightskyblue")
            } else{
                fill (255)
            }
            rect(this.x, this.y, 100, 40)
            fill(0)
            textAlign(CENTER)
            text(this.label, this.x + 50, this.y + 25)
        }
    
        containsPoint(x, y){
    
            var left = this.x
            var right = this.x + 100
            var top = this.y
            var bottom = this.y + 40
        
            var isInHorizontalRange = left < x && x < right
            var isInVerticalRange = top < y && y <bottom 

            if (isInHorizontalRange && isInVerticalRange){
                return true
            }
        }

        containsMouse(){
            return this.containsPoint (mouseX, mouseY)
        }
    }