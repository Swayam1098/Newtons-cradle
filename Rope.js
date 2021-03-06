class Rope{
    constructor(body1, body2, offsetX, offsetY){

this.offsetX=offsetX;
this.offsetY=offsetY;

        var options = {
bodyA: body1,
bodyB: body2,
bodyB: {x:this.offsetX, y:this.offsetY}

        }
        this.rope= Matter.Constraint.create(options)
    World.add(world,this.rope)
   
    }
display(){
    
    var point1 = this.rope.bodyA.position
    var point2 = this.rope.bodyB
   
    strokeWeight(9)

    var anchor1x = point1.x ;
    var anchor1y = point1.y ;

    var anchor2x = point2.x + this.offsetX ;
    var anchor2y = point2.y + this.offsetY ;

    line(anchor1x,anchor1y,anchor2x, anchor2y)
    
}
}