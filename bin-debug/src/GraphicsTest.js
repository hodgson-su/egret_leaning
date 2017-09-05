/**
 * Created by wwtliu on 14/12/16.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GraphicsTest = (function (_super) {
    __extends(GraphicsTest, _super);
    function GraphicsTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GraphicsTest.prototype.onAddToStage = function (event) {
        this.drawCurve();
    };
    //    lineStyle
    GraphicsTest.prototype.drawRect = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 1); //填充当前颜色，（颜色，可见度）
        shp.graphics.lineStyle(10, 0x0000ff); //外边框线，（粗细，颜色）
        //shp.graphics.drawRect(0,0,100,100);
        shp.graphics.drawCircle(100, 100, 50); //（x坐标，y坐标，半径）
        shp.graphics.endFill();
        this.addChild(shp); //填充到当前文件中
    };
    GraphicsTest.prototype.drawLine = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(5, 0xff0000);
        shp.graphics.moveTo(68, 84); //起始点坐标，必须有一个
        shp.graphics.lineTo(167, 76);
        shp.graphics.lineTo(221, 118);
        shp.graphics.lineTo(290, 162);
        shp.graphics.lineTo(297, 228);
        shp.graphics.lineTo(412, 250);
        shp.graphics.lineTo(443, 174);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    //贝塞尔曲线
    GraphicsTest.prototype.drawCurve = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(5, 0xff00ff);
        shp.graphics.moveTo(10, 10);
        shp.graphics.curveTo(100, 100, 200, 50);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return GraphicsTest;
}(egret.DisplayObjectContainer));
__reflect(GraphicsTest.prototype, "GraphicsTest");
