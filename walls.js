class Walls {
    constructor(x,y,width,height)
    {
        var option = {
            density : 0.5,
            isStatic : true
        }
        this.walls = Bodies.rectangle(x,y,width,height,option) 
        World.add(world,this.walls)
        this.w = width
        this.h = height       
    }

    display(){
        var pos = this.walls.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.w,this.h)
        pop()
    }   
}