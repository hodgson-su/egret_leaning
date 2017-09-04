class AnchorText extends egret.DisplayObjectContainer{
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
        // shp.x = 100;
        // shp.y = 100;
        shp.anchorOffsetX = 50;
    }
}