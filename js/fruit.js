/**
 * Created by Administrator on 2017/3/5.
 */

//果实

var fruitObj = function () {
    this.alive = [];                                                                                                                    //boolean 果实的状态
    this.x = [];                                                                                                                        //x坐标
    this.y = [];                                                                                                                        //y坐标
    this.aneNO = [];
    this.scale = [];                                                                                                                    //果实图片的大小
    this.speed = [];                                                                                                                    //成长速度
    this.fruitType = [];                                                                                                                //果实类型
    this.orange = new Image();
    this.blue = new Image();
};

fruitObj.prototype.num = 30;                                                                                                            //果实的数量

/*初始化*/
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNO[i] = 0;
        this.speed[i] = Math.random() * 0.017 + 0.003;                                                                                  //[0.003 ,0.02)
        this.fruitType[i] = "";
    }
    this.orange.src = 'img/fruit.png';
    this.blue.src = 'img/blue.png';
};

/*绘制果实*/
fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            if (this.fruitType[i] == 'blue') {
                var pic = this.blue;
            } else {
                var pic = this.orange;
            }
            if (this.scale[i] <= 14) {
                var NO = this.aneNO[i];
                this.x[i] = ane.headx[NO];
                this.y[i] = ane.heady[NO];
                this.scale[i] += this.speed[i] * deltaTime;                                                                             //果实的大小慢慢变大
            } else {
                this.y[i] -= this.speed[i] * 7 * deltaTime;
                //ctx2.drawImage(pic,this.x[i] - this.scale[i] * 0.5,this.y[i] - this.scale[i] * 0.5,this.scale[i],this.scale[i]); 
            }
            ctx2.drawImage(pic, this.x[i] - this.scale[i] * 0.5, this.y[i] - this.scale[i] * 0.5, this.scale[i], this.scale[i]);
            /*当果实的Y坐标小于10
             * 把果实的状态变为false
             * 同理当果实的状态 this.alive = true 时
             * 执行drawImage和果实的生长 */
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};

/*果实出生点*/
fruitObj.prototype.born = function (i) {                                                                                                                                                                        //出生的Y坐标
    this.aneNO[i] = Math.floor(Math.random() * ane.num);                                                                                //随即选择一个海葵的X坐标 
    if (this.scale[i] <= 14) {
        var NO = this.aneNO[i];
        this.x[i] = ane.headx[NO];
        this.y[i] = ane.heady[NO];
        this.scale[i] += this.speed[i] * deltaTime;                                                                                     //果实的大小慢慢变大
    }
    this.scale[i] = 0;                                                                                                                  //果实出生时大小为o
    this.alive[i] = true;                                                                                                               //把出生的果实状态设置为true
    var ran = Math.random();                                                                                                            //生成一个随机数，如果随机数小于0.2则fruitType为blue
    if (ran < 0.2) {
        this.fruitType[i] = 'blue';
    } else {
        this.fruitType[i] = 'orange';
    }
};

/*果实被吃掉*/
fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;                                                                                                              //this.alive[i] = false时，draw方法就在下一帧不会继续绘制这个果实了
};

/*监视屏幕中果实数量*/
function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {                                                                                               //统计画布中fruit.alive = true 的果实数量
        if (fruit.alive[i]) num++;
    }
    if (num < 15) {                                                                                                                     //果实数量小于15个
        sendFruit();                                                                                                                    //重新生长果实
        return;
    }
}

/*重新生长果实*/
function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);                                                                                                              //调用fruit类的born方法
            return;
        }
    }
}

