/**
 * Created by wwtliu on 14/12/22.
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
var NetDemo = (function (_super) {
    __extends(NetDemo, _super);
    function NetDemo() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    NetDemo.prototype.onAddToStage = function (event) {
        this.urlloader = new egret.URLLoader();
        var urlreq = new egret.URLRequest();
        //    请求网络地址
        urlreq.url = "http://httpbin.org/user-agent";
        this.urlloader.load(urlreq);
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
    };
    NetDemo.prototype.onComplete = function (evetn) {
        console.log(this.urlloader.data);
    };
    return NetDemo;
}(egret.DisplayObjectContainer));
__reflect(NetDemo.prototype, "NetDemo");
