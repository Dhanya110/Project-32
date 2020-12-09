class Connection{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.connect = Constraint.create(options);
        World.add(world, this.connect);
    }

   

    display(){
        if( this.connect.bodyA){
            var pointA = this.connect.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.connect.bodyA=null;
     }

     attach(body){
        this.connect.bodyA = body
    }
}