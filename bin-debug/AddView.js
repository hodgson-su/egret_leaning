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
var AddView = (function (_super) {
    __extends(AddView, _super);
    function AddView() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    AddView.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        spr.x = 120;
        //该对象存在，即对象已经存在内存中
        this.addChild(spr);
        //参与渲染过程
        //this.removeChild(spr);
        //该对象存在，驻足与内存中
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.y = 130;
        this.addChild(spr1);
        var spr2 = new egret.Sprite();
        spr2.graphics.beginFill(0x0000ff);
        spr2.graphics.drawRect(0, 0, 50, 50);
        spr2.graphics.endFill();
        spr2.x = 10;
        spr2.y = 10;
        this.addChild(spr2);
        spr.addChild(spr2);
        spr1.addChild(spr2);
        if (spr2.parent) {
            spr1.parent.removeChild(spr2);
        }
    };
    return AddView;
}(egret.DisplayObjectContainer));
__reflect(AddView.prototype, "AddView");
//# sourceMappingURL=AddView.js.map