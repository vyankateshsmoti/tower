class SlingShot{
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        //this.bodyA = bodyA;
        this.pointB = pointB;
        //console.log("pointA",this.bodyA.body.position.x);
        //console.log("pointB",this.pointB.x);
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.body.position;
        var pointB = this.pointB;
       
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}