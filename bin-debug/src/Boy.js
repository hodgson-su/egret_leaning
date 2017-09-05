/**
 * Created by wwtliu on 14/12/11.
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
// class Boy extends egret.Sprite{
//     public  constructor(){
//         super();
//     }
//     public order(){
//         //生成约会事件对象
//         var daterEvent:DateEvent = new DateEvent(DateEvent.DATE);
//         //添加相应的约会信息
//         daterEvent._year = 2014;
//         daterEvent._month = 12;
//         daterEvent._date = 11;
//         daterEvent._where= "极客学院";
//         daterEvent._todo = "共同学习";
//         //发送请求事件
//         this.dispatchEvent(daterEvent);
//     }
// }
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super.call(this) || this;
    }
    Boy.prototype.order = function () {
        var daterEvent = new DateEvent(DateEvent.DATE);
        daterEvent._year = 2017;
        daterEvent._month = 9;
        daterEvent._date = 5;
        daterEvent._where = "电影院";
        daterEvent._todo = "看电影";
        //发送事件
        this.dispatchEvent(daterEvent);
    };
    return Boy;
}(egret.Sprite));
__reflect(Boy.prototype, "Boy");
