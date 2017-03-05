/**
 * Created by Administrator on 2017/3/5.
 */

/*海葵*/
var aneObj = function () {
    this.x = [];
    this.length = [];
};

aneObj.prototype.num = 50;

aneObj.prototype.init = function () {
    for (var i = 0 ; i < this.num ; i++) {
        this.x[i] = i * 16 + Math.random() * 20;        //海葵x坐标
        this.length[i] = 200 + Math.random() * 50;      //高度
    }

};

aneObj.prototype.draw = function () {
    /*
    * ctx2.save()与ctx2.restore()
    * 之间的样式只在这对api之间起作用
    * 绘制海葵需要的api
    * 1.beginPath()起始一条路径
    * 2.moveTo（）把路径移动到画布中的指定点，不创建线条
    * 3.lineTo（）添加一个新点，创建该点到最后指定点的线条
    * 4.stroke（）绘制已定义的路径
    * 5.strokeStyle 设置或返回颜色，渐变或模式
    * 6.lineWidth 线条宽度
    * 7.lineCap 结束端点样式
    * 8.globalAlpha 透明值*/
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = '#3b154e';
    for (var i = 0 ; i < this.num ; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canvasHeight);
        ctx2.lineTo(this.x[i],canvasHeight - this.length[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};