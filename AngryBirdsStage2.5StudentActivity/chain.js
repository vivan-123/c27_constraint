class Chain
{
    constructor(bodyA,bodyB)
    {
        var options =
        {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 1
        }
    this.Chain = Matter.Constraint.create(options);
    World.add(world,this.Chain)
    }
    display()
    {
        strokeWeight(4)
        line (this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)
    }
}