/**
 * Created by Administrator on 2017/3/5.
 */

//主函数，实例化类，初始化，帧循环
var can1;
var can2;
var ctx1;
var ctx2;
var canvasWidth;
var canvasHeight;
var lastTime;                                                                                                    //上一次动画结束的时间
var deltaTime;                                                                                                   //每帧动画之间的间隔事件
var bgPic = new Image();                                                                                         //背景图片
var ane;                                                                                                         //海葵
var fruit;                                                                                                       //果实
var mom;                                                                                                         //大鱼
var mouseX;                                                                                                      //鼠标x坐标
var mouseY;                                                                                                      //鼠标Y坐标
var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];
var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];
var data;
var wave;
var halo;
var dust;
var dustPic = [];

document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameLoop();
}

/*初始化*/
function init() {
    /*获得canvas getContext*/
    can1 = document.getElementById('canvas1');                                                                  //fishes，dust，UI，circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');                                                                  //background,fruits,ane
    ctx2 = can2.getContext('2d');
    bgPic.src = "./img/background.jpg";                                                                         //背景图片
    ctx1.font = '30px Verdana';
    ctx1.textAlign = 'center';
    canvasWidth = can1.width;
    canvasHeight = can1.height;
    can1.addEventListener('mousemove', onMouseMove, false);                                                     //给can1添加鼠标移动事件

    ane = new aneObj();                     //海葵
    ane.init();                             //初始化海葵

    fruit = new fruitObj();                 //果实
    fruit.init();                           //初始化

    mom = new momObj();                     //鱼妈妈
    mom.init();                             //初始化

    mouseX = canvasWidth * 0.5;             //鼠标初始位置
    mouseY = canvasHeight * 0.5;

    baby = new babyFishObj();               //小鱼
    baby.init();                            //初始化小鱼

    wave = new waveObj();                   //实例化大鱼吃果实波浪
    wave.init();                            //初始化波浪状态

    halo = new haloObj();                   //实例化大鱼喂小鱼波浪
    halo.init();                            //初始化

    for (var i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = 'img/dust' + i + '.png';
    }

    dust = new dustObj();                   //实例化海藻类
    dust.init();                            //初始化

    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = 'img/babyTail' + i + '.png';
    }

    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = 'img/babyEye' + i + '.png';
    }

    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = 'img/babyFade' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = 'img/bigTail' + i + '.png';
    }

    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = 'img/bigEye' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = 'img/bigSwim' + i + '.png';
        momBodyBlue[i].src = 'img/bigSwimBlue' + i + '.png';
    }

    data = new dataObj();                       //实例化分数类
}

/*动画帧*/
function gameLoop() {
    requestAnimationFrame(gameLoop);                                                                        //api,当前帧绘制完成后，根据机器性能决定间隔多久绘制下一帧
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) deltaTime = 40;
    drawBackground();                                                                                       //背景函数
    ane.draw();                                                                                             //绘制海葵
    fruit.draw();                                                                                           //绘制果实
    fruitMonitor();                                                                                         //监视屏幕中的果实数量，当小于15个时，重新生长
    ctx1.clearRect(0, 0, canvasWidth, canvasHeight);                                                        //清空上一次绘制
    mom.draw();                                                                                             //绘制大鱼
    baby.draw();                                                                                            //绘制小鱼
    momFruitCollision();                                                                                    //大鱼与果实碰撞
    momBabyCollision();                                                                                     //大鱼与小鱼碰撞
    data.draw();                                                                                            //分数
    wave.draw();                                                                                            //大鱼波浪
    halo.draw();                                                                                            //小鱼波浪
    dust.draw();                                                                                            //海藻
}


/*鼠标移动*/
function onMouseMove(e) {
    if (!data.gameOver) {                                                                                   //判断游戏状态
        if (e.offsetX || e.layerX) {                                                                        //在画布中，获取X，Y坐标的兼容写法
            mouseX = e.offsetX == undefined ? e.layerX : e.offsetX;
            mouseY = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
}