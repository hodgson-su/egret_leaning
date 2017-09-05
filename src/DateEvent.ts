/**
 * Created by wwtliu on 14/12/11.
 */

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
class DateEvent extends egret.Event{
    public static DATE:string = "约会";
    public _year:number = 0;
    public _month:number = 0;
    public _date:number = 0;
    public _where:string = "";
    public _todo:string = "";

    public constructor(type:string,bulles:boolean = false,cancelabel:boolean = false){
        super(type,bulles,cancelabel);
    }
}