class Chain{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = anchor
        this.bodyA = body
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA) {
            var pointA = this.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(1);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}