/**
 * Created by wwtliu on 14/12/16.
 */

class GraphicsTest extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        this.drawCurve();
    }
//    lineStyle
    private drawRect():void{
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xff0000,1);//填充当前颜色，（颜色，可见度）
        shp.graphics.lineStyle(10,0x0000ff);//外边框线，（粗细，颜色）
        //shp.graphics.drawRect(0,0,100,100);
        shp.graphics.drawCircle(100,100,50);//（x坐标，y坐标，半径）
        shp.graphics.endFill();
        this.addChild(shp);//填充到当前文件中
    }

    private drawLine():void{
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(5,0xff0000);
        shp.graphics.moveTo(68,84);//起始点坐标，必须有一个
        shp.graphics.lineTo(167,76);
        shp.graphics.lineTo(221,118);
        shp.graphics.lineTo(290,162);
        shp.graphics.lineTo(297,228);
        shp.graphics.lineTo(412,250);
        shp.graphics.lineTo(443,174);
        shp.graphics.endFill();
        this.addChild(shp);
    }

    //贝塞尔曲线
    private drawCurve():void{
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(5,0xff00ff);
        shp.graphics.moveTo(10,10);
        shp.graphics.curveTo(100,100,200,50);
        shp.graphics.endFill();
        this.addChild(shp);
    }


}