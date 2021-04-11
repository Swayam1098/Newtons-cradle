class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            friction:0,
            density:7.8,
            restitution:1
            
        }
this.body = Bodies.circle(x,y,25,options)
World.add(world,this.body)

console.log(this.body)

    }
display(){
    push();
    ellipseMode(RADIUS)
    fill("blue")
     ellipse(this.body.position.x,this.body.position.y,25,25)
    pop();
}
}