class Mask extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0,0,100,100);
        shp.graphics.endFill();
        this.addChild(shp);

        var shp2:egret.Shape = new egret.Shape();
        shp2.graphics.beginFill(0x00ff00);
        shp2.graphics.drawCircle(0,0,20);
        shp2.graphics.endFill();
        this.addChild(shp2);
        shp2.x = 20;
        shp2.y = 20;

        var rect:egret.Rectangle = new egret.Rectangle(0,0,20,30);
        // shp.mask = rect;
        // shp2.mask = rect;
        shp.mask = shp2;
    }
}