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
var NetPost = (function (_super) {
    __extends(NetPost, _super);
    function NetPost() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    NetPost.prototype.onAddToStage = function (event) {
        var url = "http://httpbin.org/post";
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        loader.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables("test=ok");
        loader.load(request);
    };
    NetPost.prototype.onPostComplete = function (event) {
        var loader = event.target;
        var data = loader.data;
        console.log(data.toString);
    };
    return NetPost;
}(egret.DisplayObjectContainer));
__reflect(NetPost.prototype, "NetPost");
