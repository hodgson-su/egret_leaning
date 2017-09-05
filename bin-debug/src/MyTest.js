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
var MyTest = (function (_super) {
    __extends(MyTest, _super);
    function MyTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MyTest.prototype.onAddToStage = function (event) {
        var label = new egret.TextField();
        label.width = 400;
        label.height = 70;
        label.textColor = 0xff0000;
        //楷体
        label.fontFamily = "KaiTi";
        //布局
        label.textAlign = egret.HorizontalAlign.RIGHT;
        //设置文字的粗体和斜体
        label.bold = true;
        label.italic = true;
        //label.text = "这\n是\n第\n一\n个\n文\n本";
        label.text = "这是第一个文本";
        //alert(label.width+"--"+label.height);
        this.addChild(label);
        label.text = "你好啊";
        //alert(label.width+"--"+label.height);
    };
    return MyTest;
}(egret.DisplayObjectContainer));
__reflect(MyTest.prototype, "MyTest");
