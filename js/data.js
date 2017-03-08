/**
 * Created by Administrator on 2017/3/6.
 */
//统计游戏分数
var dataObj = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;                                              //游戏状态
    this.alpha = 0;
};

dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;
    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = 'white';
    ctx1.fillStyle = 'white';
    ctx1.fillText('SCORE :' + this.score, w * 0.5, h - 20);
    if (this.gameOver) {
        this.alpha += deltaTime * 0.0004;
        if (this.alpha > 1) {
            this.alpha = 1;
        }
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("GAME OVER", w * 0.5, h * 0.5);
    }
    ctx1.restore();
};

//当大鱼与小鱼发生碰撞时，执行
dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 10 * this.double;
    this.fruitNum = 0;                                              //碰撞完成后大鱼吃掉的果实数归零
    this.double = 1;                                                //倍数初始为1
};