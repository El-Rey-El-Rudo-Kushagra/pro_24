class Paper {
    constructor(x,y,r){
        var options={
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world,this.body)
        this.radius=r;
    }
    display(){
        var paperPos=this.body.position;
        push ()
        //rectMode(CENTER);
        translate (paperPos.x,paperPos.y)
        //rotate (this.angle)
        ellipse (0,0,this.radius,this.radius)
        pop ()
    }
}