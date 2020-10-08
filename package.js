class Package{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("package.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      }
}