/**
 * Created by wwtliu on 14/12/11.
 */


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

class Boy extends egret.Sprite{
    public constructor(){
        super();
    }
    public order(){
        var daterEvent:DateEvent = new DateEvent(DateEvent.DATE);
        daterEvent._year = 2017;
        daterEvent._month = 9;
        daterEvent._date = 5;
        daterEvent._where = "电影院";
        daterEvent._todo = "看电影";

        //发送事件
        this.dispatchEvent(daterEvent);
    }
}