/**
 * Created by Administrator on 2017/3/5.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;                                                                                                 //角度
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
};

momObj.prototype.init = function () {
    this.x = canvasWidth * 0.5;
    this.y = canvasHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = 'img/bigEye0.png';
    this.bigBody.src = 'img/bigSwim0.png';
    this.bigTail.src = 'img/bigTail0.png';
};

momObj.prototype.draw = function () {

    /*在commonFunction中封装了一个lerp函数

    * function lerpDistance(aim, cur, ratio) {
    * var delta = cur - aim;
    * return aim + delta * ratio;
    *
    * aim是目标值
    * cur当前值
    * ratio百分比
    *
    * 返回的结果就是按照一定的比率逐渐趋近目标值
    * */

    this.x = lerpDistance(mouseX,this.x,0.99);
    this.y = lerpDistance(mouseY,this.y,0.99);
    var deltaY = mouseY - this.y;
    var deltaX = mouseX - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.6);
    ctx1.save();
    ctx1.translate(this.x,this.y);                                                                              //改变画布圆点坐标
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5,-this.bigEye.height * 0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5,-this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30,-this.bigTail.height * 0.5);
    ctx1.restore();
};