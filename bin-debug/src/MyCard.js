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
var MyCard = (function (_super) {
    __extends(MyCard, _super);
    function MyCard() {
        return _super.call(this) || this;
    }
    MyCard.prototype.drawCard = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 20, 20);
    };
    return MyCard;
}(egret.Shape));
__reflect(MyCard.prototype, "MyCard");
