/**
 * Created by Administrator on 2017/3/6.
 */

//大鱼喂小于波浪动画
var haloObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
};

haloObj.prototype.num = 10;

haloObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
};

haloObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = "rgba(203,91,0,1)";
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            //draw
            this.r[i] += deltaTime * 0.05;
            if (this.r[i] > 70) {           //当波浪半径大于70时，波浪状态变为false
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 70;
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(203,91,0," + alpha + ")";
            ctx1.stroke();
        }
    }
    ctx1.restore();
};


//当大鱼与小鱼发生碰撞时，执行
haloObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {           //初始化时this.alive[i]状态为false,所以if(!this.alive[i]) == true, 即可执行以下函数
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.alive[i] = true;       //波浪状态变为true
        }
    }
};