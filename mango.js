class Mango{
	constructor(x,y,r)
	{
		var options={
            isStatic: true,
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image = loadImage("images/mango.png")
		World.add(world, this.body);
    }
	display()
	{
			var mangopos=this.body.position;		
			push()
			translate(mangopos.x, mangopos.y);
			imageMode(CENTER)
			image(this.image, 0,0,this.r, this.r);
			pop()
	}

}