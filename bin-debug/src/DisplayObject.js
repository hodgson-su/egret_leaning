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
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DisplayObject.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
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
    };
    return DisplayObject;
}(egret.DisplayObjectContainer));
__reflect(DisplayObject.prototype, "DisplayObject");
