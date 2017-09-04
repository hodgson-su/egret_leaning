class DisplayObject extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0,0,100,100);
        spr.graphics.endFill();
        this.addChild(spr);
        spr.x = 100;
        spr.y = 100;
        spr.scaleX = 0.5;
        spr.scaleY = 0.5;
        spr.alpha = 0.2;
        spr.rotation = 45;
        /**
         * alpha: 透明度
         * width：宽度
         * height：高度
         * rotation：旋转角度
         * scaleX：横向缩放
         * scaleY：纵向缩放
         * skewY：skewX：斜切
         * visible：是否可见
         * x
         * y
         */
    }
}