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
var MyTimer = (function (_super) {
    __extends(MyTimer, _super);
    function MyTimer() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    /*
     1.2个属性：delay、repeatCount
     2.3个方法：start、reset、stop
     3.2个事件：TimerEvent.TIMER、TimerEvent.TIMER_COMPLETE
     */
    MyTimer.prototype.onAddToStage = function (event) {
        var timer = new egret.Timer(500, 5);
        //    注册监听事件
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerfunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timercomfun, this);
        //    开始计时
        timer.start();
    };
    MyTimer.prototype.timerfunc = function () {
        alert("计时");
    };
    MyTimer.prototype.timercomfun = function () {
        alert("计时结束");
    };
    return MyTimer;
}(egret.DisplayObjectContainer));
__reflect(MyTimer.prototype, "MyTimer");
