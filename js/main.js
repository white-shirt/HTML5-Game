/**
 * Created by Administrator on 2017/3/5.
 */
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
    canvasWidth = can1.width;
    canvasHeight = can1.height;
    can1.addEventListener('mousemove',onMouseMove,false);                                                       //给can1添加鼠标移动事件

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
}

/*动画帧*/
function gameLoop() {
    requestAnimationFrame(gameLoop);                                                                        //api,当前帧绘制完成后，根据机器性能决定间隔多久绘制下一帧
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    drawBackground();                                                                                       //背景函数
    ane.draw();                                                                                             //绘制海葵
    fruit.draw();                                                                                           //绘制果实
    fruitMonitor();                                                                                         //监视屏幕中的果实数量，当小于15个时，重新生长
    ctx1.clearRect(0,0,canvasWidth,canvasHeight);                                                           //清空上一次绘制
    mom.draw();                                                                                             //绘制大鱼
    momFruitCollision();                                                                                    //大鱼吃掉果实
    baby.draw();                                                                                            //绘制小鱼
}


/*鼠标移动*/
function onMouseMove(e) {
    if(e.offsetX || e.layerX) {                                                                             //在画布中，获取X，Y坐标的兼容写法
        mouseX = e.offsetX == undefined ? e.layerX : e.offsetX;
        mouseY = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
}