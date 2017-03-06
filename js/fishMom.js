/**
 * Created by Administrator on 2017/3/5.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;                                                                                                 //角度
    this.momTailTimer = 0;
    this.momTailCount = 0;
    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;
    this.momBodyCount = 0;
};

momObj.prototype.init = function () {
    this.x = canvasWidth * 0.5;
    this.y = canvasHeight * 0.5;
    this.angle = 0;
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

    //tail
    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }

    //mom Eye
    this.momEyeTimer +=deltaTime;
    if (this.momEyeTimer > this.momEyeInterval) {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if (this.momEyeCount == 0) {
            this.momEyeInterval = Math.random() * 1500 + 2000;
        }else {
            this.momEyeInterval = 200;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);                                                                              //改变画布圆点坐标
    ctx1.rotate(this.angle);
    //big body
    var momBodyCount = this.momBodyCount;
    if (data.double == 1) {
        ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width * 0.5,-momBodyOra[momBodyCount].height * 0.5);
    }else {
        ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width * 0.5,-momBodyBlue[momBodyCount].height * 0.5);
    }
    //big Tail
    var momTailCount = this.momTailCount;
    ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width * 0.5 + 30,-momTail[momTailCount].height * 0.5);
    //big Eye
    var momEyeCount = this.momEyeCount;
    ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width * 0.5,-momEye[momEyeCount].height * 0.5);
    ctx1.restore();
};