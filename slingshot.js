class Slingshot {

    constructor(bodyA, pointB) {

        var options_ = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 50,
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options_);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }


    display() {
        if (this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(100);

            line(pointA.x,pointA.y,pointB.x,point.y);

        }
    }
}