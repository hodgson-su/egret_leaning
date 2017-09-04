class MyCard extends egret.Shape{
    public constructor(){
        super();
    }
    private drawCard(){
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0,0,20,20);
    }
}