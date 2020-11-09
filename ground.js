class ground{

    constructor(x,y,width,height){

        var option={

    isStatic: true

        }

        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        World.add(world,this.body)

    }

    display(){
stroke("red");
strokeWeight(5);
             fill("purple");
        rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,this.width,this.height) 

    }



}