/**
 * Created by wwtliu on 14/12/9.
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
var ManageMent = (function (_super) {
    __extends(ManageMent, _super);
    function ManageMent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ManageMent.prototype.onAddToStage = function () {
        //深度值：0
        //    var spr:egret.Sprite = new egret.Sprite();
        //    spr.graphics.beginFill(0xff0000);
        //    spr.graphics.drawRect(0,0,100,100);
        //    spr.graphics.endFill();
        //    this.addChild(spr);
        ////    z-次序
        //    console.log(this.numChildren);
        //    //深度值：1
        //    var spr1:egret.Sprite = new egret.Sprite();
        //    spr1.graphics.beginFill(0x00ff00);
        //    spr1.graphics.drawRect(0,0,100,100);
        //    spr1.graphics.endFill();
        //    spr1.x = 30;
        //    spr1.y = 30;
        //    this.addChild(spr1);
        var sprcon = new egret.Sprite();
        this.addChild(sprcon);
        sprcon.x = 10;
        for (var i = 0; i < 4; i++) {
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0xffffff * Math.random());
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            spr.x = i * 20;
            sprcon.addChild(spr);
        }
        var sprNew = new egret.Sprite();
        sprNew.graphics.beginFill(0xff0000);
        sprNew.graphics.drawRect(0, 0, 150, 150);
        sprNew.graphics.endFill();
        sprNew.x = 10;
        sprNew.y = 10;
        //sprNew.addChild(sprcon);
        sprcon.addChildAt(sprNew, 1);
        /**
         * 容器.swapChildren(显示对象，显示对象)
         * 容器.swapChildrenAt(深度值,深度值)
         */
        //sprcon.swapChildrenAt(1,3);
        //    容器.setChildIndex(显示对象,新的深度值)
        sprcon.setChildIndex(sprNew, 4);
    };
    return ManageMent;
}(egret.DisplayObjectContainer));
__reflect(ManageMent.prototype, "ManageMent");
