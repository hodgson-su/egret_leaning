class MySound extends egret.DisplayObjectContainer{
    public constructor(){
        super();
    }
    private onAddToStage(event:egret.Event){
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
        RES.loadGroup("ms");
    }

    private _curSound:egret.Sound;
    private onResourceLoadComplete(event:RES.ResourceEvent):void{
       this._curSound = new egret.Sound();
       this._curSound= RES.getRes("mysound");
        //播放
        this._curSound.play();
    }

    private drawStopBtn(){
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect (0,0,100,100);
        spr.graphics.endFill();
        spr.width = 100;
        spr.height = 100;
        this.addChild(spr);
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
    }

    private onTouch(evt:egret.TouchEvent){
        this._curSound.close();
    }

   
}