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
var ChildrenObject = (function (_super) {
    __extends(ChildrenObject, _super);
    function ChildrenObject() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ChildrenObject.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        this.addChild(spr);
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.x = 50;
        spr1.name = "Hello";
        spr.addChild(spr1);
        //var _spr:egret.DisplayObject = spr.getChildAt(0);
        var _spr = spr.getChildByName("Hello");
        _spr.scaleX = 0.5;
    };
    return ChildrenObject;
}(egret.DisplayObjectContainer));
__reflect(ChildrenObject.prototype, "ChildrenObject");
