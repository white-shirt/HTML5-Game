/**
 * Created by Administrator on 2017/3/6.
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
};

dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;
    ctx1.fillStyle = 'white';
    ctx1.fillText('score  ' + this.score,w*0.5,h-20);
};

dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
};