/**
 * Created by Administrator on 2017/3/5.
 */

/*海葵*/
var aneObj = function () {
    //start point ,control point,end point(sin)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = []; //振幅
    this.alpha = 0; //角度
};

aneObj.prototype.num = 50;

aneObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;        //海葵x坐标
        this.headx[i] = this.rootx[i];
        this.heady[i] = canvasHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
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
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);   //x坐标[-1,1]
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = '#3b154e';
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canvasHeight);
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i], canvasHeight - 100, this.headx[i], this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};