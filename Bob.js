class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            retitution:1

        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,options)
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        fill("gray");
        
    }
}