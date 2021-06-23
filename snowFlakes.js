class snowFlakes {

constructor(x,y) {
    var options={
        isStatic:false,
        density:2
    }
    this.body=Bodies.circle(x,y,20,options);
    this.r=20;
    this.image = loadImage("snow5.webp");
    
    World.add(world,this.body);
}

update(){
    if(this.body.position.y>height+300) {
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)});
    }
}
display(){
    
    imageMode(CENTER);
    image(this.image, this.body.position.x,this.body.position.y,20,20);
    
}

}