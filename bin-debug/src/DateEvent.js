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
// class DateEvent extends egret.Event{
//     public static DATE:string = "约会";
//     public _year:number = 0;
//     public _month:number = 0;
//     public _date:number = 0;
//     public _where:string = "";
//     public _todo:string = "";
//     public constructor(type:string,bulles:boolean = false,cancelable:boolean = false){
//         //事情，是否冒泡，回复
//         super(type,bulles,cancelable);
//     }
// }
/**
 * 事件机制
 * 存储公共数据
 */
var DateEvent = (function (_super) {
    __extends(DateEvent, _super);
    function DateEvent(type, bulles, cancelabel) {
        if (bulles === void 0) { bulles = false; }
        if (cancelabel === void 0) { cancelabel = false; }
        var _this = _super.call(this, type, bulles, cancelabel) || this;
        _this._year = 0;
        _this._month = 0;
        _this._date = 0;
        _this._where = "";
        _this._todo = "";
        return _this;
    }
    DateEvent.DATE = "约会";
    return DateEvent;
}(egret.Event));
__reflect(DateEvent.prototype, "DateEvent");
