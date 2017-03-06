/**
 * Created by Administrator on 2017/3/6.
 */
var waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
};

waveObj.prototype.num = 10;

waveObj.prototype.init = function () {
    for (var i = 0 ; i < this.num ; i++) {
        this.alive[i] = false;
        this.r[i] = 0;
    }
};

waveObj.prototype.draw = function () {
    //big eat fruit
    ctx1.save();
    ctx1.lineWidth = 3;
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = 'white';
    for (var i = 0 ; i < this.num ; i++) {
        if (this.alive[i]) {
            //api ctx.arc
            //draw
            if (this.r[i] > 50) {
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 50;
            this.r[i] += deltaTime * 0.04;
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI * 2);
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(255,255,255,"+ alpha +")";
            ctx1.stroke();
        }
    }
    ctx1.restore();
};

waveObj.prototype.born = function (x,y) {
    for (var i = 0 ; i < this.num ; i++) {
        if (!this.alive[i]) {
            //born
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            return;
        }
    }
};