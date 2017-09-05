/**
 * Created by wwtliu on 14/12/15.
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
var MyPic = (function (_super) {
    __extends(MyPic, _super);
    function MyPic() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyPic.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.addImage, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("tt");
    };
    MyPic.prototype.addImage = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("toolt");
        this.addChild(img);
        var img1 = new egret.Bitmap();
        img1.texture = RES.getRes("toolt");
        img1.width *= 2;
        img1.y = 150;
        this.addChild(img1);
        var img2 = new egret.Bitmap();
        img2.texture = RES.getRes("toolt");
        var rect = new egret.Rectangle(30, 31, 40, 41);
        img2.scale9Grid = rect;
        img2.width *= 2;
        img2.y = 300;
        this.addChild(img2);
    };
    return MyPic;
}(egret.DisplayObjectContainer));
__reflect(MyPic.prototype, "MyPic");
