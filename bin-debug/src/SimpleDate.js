// /**
//  * Created by wwtliu on 14/12/11.
//  */
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
// class SimpleDate extends  egret.DisplayObjectContainer{
//     public constructor(){
//         super();
//         this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
//     }
//     private onAddToStage(event:egret.Event){
//         //创建一个男朋友
//         var boy:Boy = new Boy();
//         boy.name = "ime";
//         //创建女朋友
//         var girl:Girl = new Girl();
//         girl.name = "小雪";
//         //注册侦听事件
//         boy.addEventListener(DateEvent.DATE,girl.getDate,girl,false,10);
//         //检测侦听器
//         if(boy.hasEventListener(DateEvent.DATE)){
//             console.log("已经注册");
//         }else{
//             console.log("未注册");
//         }
//         //男朋友的邀请
//         boy.order();
//         //移除侦听器
//         boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
//         //检测侦听器
//         if(boy.hasEventListener(DateEvent.DATE)){
//             console.log("已经注册");
//         }else{
//             console.log("未注册");
//         }
//     }
// }
var SimpleDate = (function (_super) {
    __extends(SimpleDate, _super);
    function SimpleDate() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    SimpleDate.prototype.onAddToStage = function (event) {
        var boy = new Boy();
        boy.name = "Jony";
        var girl = new Girl();
        girl.name = "Mimy";
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl, false, 10);
        if (boy.hasEventListener(DateEvent.DATE)) {
            console.log("已经注册");
        }
        else {
            console.log("未注册");
        }
        boy.order();
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        if (boy.hasEventListener(DateEvent.DATE)) {
            console.log("已经注册");
        }
        else {
            console.log("未注册");
        }
    };
    return SimpleDate;
}(egret.DisplayObjectContainer));
__reflect(SimpleDate.prototype, "SimpleDate");
