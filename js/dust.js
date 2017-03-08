/**
 * Created by Administrator on 2017/3/8.
 */

var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];                                                                      //摆动幅度
    this.NO = [];                                                                       //图片序号
    this.alpha;                                                                         //sin（）角度
};

dustObj.prototype.num = 30;                                                             //图片数量

dustObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * canvasWidth;                                        //初始化x坐标
        this.y[i] = Math.random() * canvasHeight;                                       //初始化y坐标
        this.amp[i] = 20 + Math.random() * 25;                                          //摆动幅度
        this.NO[i] = Math.floor(Math.random() * 7);                                     //[0 ,6),图片序号
    }
    this.alpha = 0;                                                                     //角度
};

dustObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0008;                                                   //每一帧随机一个alpha角度
    var l = Math.sin(this.alpha);
    for (var i = 0; i < this.num; i++) {
        var no = this.NO[i];
        ctx1.drawImage(dustPic[no], this.x[i] + this.amp[i] * l, this.y[i]);            //每一帧，在一定范围内随机改变当前图片的x值，y值不变，即横向移动
    }
};