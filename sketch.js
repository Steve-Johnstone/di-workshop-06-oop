var dogButton = new Button("Dog", 10, 10)
var catButton = new Button("Cat", 200, 10)
var goatButton = new Button("Goat", 10, 200)
var horseButton = new Button("Horse", 200, 200)

function setup(){
    createCanvas(400,400)
}

function draw(){
    background (220)

    dogButton.draw()
    catButton.draw()
    goatButton.draw()
    horseButton.draw()
}

function mousePressed(){
    if (dogButton.containsMouse()){
        alert ("Woof!")
    }
    if (catButton.containsMouse()){
        alert ("Meeeooow!")
    }
    if (goatButton.containsMouse()){
            alert ("braaayyy!")
    }
    if (horseButton.containsMouse()){
                alert ("Naaaayy!")
    }
}

    