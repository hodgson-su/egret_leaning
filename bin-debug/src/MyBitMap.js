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
var MyBitMap = (function (_super) {
    __extends(MyBitMap, _super);
    function MyBitMap() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyBitMap.prototype.onAddToStage = function (event) {
        //RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.addImage,this);
        //预加载
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.addImage, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("yt");
    };
    MyBitMap.prototype.addImage = function () {
        var img1 = new egret.Bitmap();
        img1.texture = RES.getRes("yaotou");
        this.addChild(img1);
    };
    return MyBitMap;
}(egret.DisplayObjectContainer));
__reflect(MyBitMap.prototype, "MyBitMap");
