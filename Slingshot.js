class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .05,
            length: .1
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }


    fly()
    {
        this.sling.bodyA = null;
    }


    display(){
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    } 
}